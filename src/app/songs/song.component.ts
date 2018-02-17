import {Component, OnInit, /*EventEmitter, Output*/} from '@angular/core';
import {ActivatedRoute, UrlSegment, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';

import {BypassHtmlSanitizerPipe} 		from '../shared/bypass-html-sanitizer.pipe';

import {SongService, SingleSongResponse} 	from '../core/song.service';
import {LoaderService} 				from '../core/loader.service';
import {WindowTitleService}			from '../core/window-title.service';

import {SongModel} from './song.model';

@Component({
	selector: 'app-song',
	templateUrl: './song.component.html',
	styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

	//TODO: Do this shit with a service and get over it. Everyone registers to it and everybody wins.
/*	@Output() loading_state=new EventEmitter<boolean>();*/
	private	song:SongModel=null;

	public	constructor(
		private actroute:ActivatedRoute,
		private r:Router,
		private ss:SongService,
		private	ls:LoaderService,
		private	wts:WindowTitleService){

	}

	//TODO: I should think a bit about this part... We are loading, right?. Should show the loader... Oh damn.
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
					//TODO: Bubble up the next and previous by emitting a message...
					//TODO: Perhaps we should always load the first and last too... 
					//TODO: Or maybe that's another service???

					this.wts.set_title(this.song.title);
					this.ls.set_loading(false);
				})
				.catch( (err) => {
					console.log("FUCK YOU ", err);
					//TODO.
					//this.r.navigate(['404-not-found']);
				});
			});
	}

}
