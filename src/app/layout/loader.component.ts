import {Component} from '@angular/core';
import {LoaderService} from '../core/loader.service';

/*
TODO: Wouldn't it be better to follow "https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service",
this is much too specific.
*/

@Component({
	templateUrl: './loader.component.html',
	selector: 'app-loader',
	styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

	private	loading:boolean=false;

	public	constructor(ls:LoaderService) {

		ls.register(this);
	}
	public	is_loading():boolean {return this.loading;}
	public	load():void {this.loading=true;}
	public	stop():void {this.loading=false;}
}
