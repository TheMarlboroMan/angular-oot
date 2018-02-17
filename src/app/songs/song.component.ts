import {Component, OnInit, /*EventEmitter, Output*/} from '@angular/core';
import {ActivatedRoute, UrlSegment, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';

import {BypassHtmlSanitizerPipe} 			from '../shared/bypass-html-sanitizer.pipe';

import {SongService, SingleSongResponse} 		from '../core/song.service';
import {LoaderService} 					from '../core/loader.service';
import {WindowTitleService}				from '../core/window-title.service';
import {SongNavigationService, SongNavigationModel}	from '../core/song-navigation.service';

import {SongModel} from './song.model';

@Component({
	selector: 'app-song',
	templateUrl: './song.component.html',
	styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

	private	song:SongModel=null;

	public	constructor(
		private actroute:ActivatedRoute,
		private r:Router,
		private ss:SongService,
		private	ls:LoaderService,
		private	wts:WindowTitleService,
		private	sns:SongNavigationService){

	}

	public	is_ready():boolean		{return null!==this.song;}
	public	get_title():string 		{return this.song.title;}
	public	get_date():Date 		{return this.song.date;}
	public	get_intro_paragraph():string 	{return this.song.intro;}
	public	get_audio_url():string 		{return this.song.audio_url;}
	public	get_image_url():string		{return this.song.image_url;}
	public	get_image_title():string	{return this.song.image_title;}
	public	get_main_text():string		{return this.song.main_text;}
	public	get_credits() 			{return this.song.credits;}

	public	ngOnInit():void {

		//TODO: Perhaps we can centralise this.  Check the WindowTitleService.
		this.ls.set_loading(true);
		window.scrollTo(0,0);

		this.actroute.url.
			switchMap((data:UrlSegment[]) => {

				//TODO: EVIL CONSTANTS....
				if('newest'==data[0].path) {
					return Promise.resolve(null);
				}
				else if('song'==data[0].path && 2==data.length) {
					return Promise.resolve(data[1].path);
				}
				
				throw new Error("Could not resolve path");
			}).
			subscribe( (slug:string) => {

				let p=null===slug ? this.ss.get_latest() : this.ss.get_by_slug(slug);
				p.then( (data:SingleSongResponse) => {
					this.song=data.model;

					//TODO: What happens when we navigate to other pages that do not load this data???.
					//TODO: Or maybe that's another service???

					this.wts.set_title(this.song.title);
					this.sns.set_song_navigation(new SongNavigationModel(data.previous, data.next));
					this.ls.set_loading(false);
				})
				.catch( (err) => {
					this.r.navigate(['404']);
				});
			});
	}

}
