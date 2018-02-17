import {Component, OnDestroy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Subscription}   from 'rxjs/Subscription';

import {SongNavigationService,SongNavigationModel} from '../core/song-navigation.service';

@Component({
	templateUrl: './header.component.html',
	selector: 'app-header',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

	private	model:SongNavigationModel=new SongNavigationModel(null, null);
	private sub:Subscription;

	public	constructor(private sns:SongNavigationService) {

		//TODO: Usubscribe on destroy!!!.
		this.sub=sns.get_observable().subscribe( (data:SongNavigationModel) => {
			this.model=data;
		});
	}

	public	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public	get_next():string {return this.model.next;}
	public	get_previous():string {return this.model.previous;}

	public	is_next():boolean {return null!==this.model.next;}
	public	is_previous():boolean {return null!==this.model.previous;}

}
