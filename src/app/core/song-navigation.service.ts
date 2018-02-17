import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export class SongNavigationModel {

	public 	constructor(p:string, n:string) {
		this.previous=p;
		this.next=n;
	}

	public	previous:string;
	public	next:string;
}

@Injectable()
export class SongNavigationService {

	private	navigation_changes:Subject<SongNavigationModel>=new Subject<SongNavigationModel>();

	public get_observable() {return this.navigation_changes.asObservable();}
	public	set_song_navigation(data:SongNavigationModel) {this.navigation_changes.next(data);}
}
