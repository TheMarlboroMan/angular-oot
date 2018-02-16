import {Component} from '@angular/core';

@Component({
	templateUrl: './loader.component.html',
	selector: 'app-loader',
	styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

	private	loading:boolean=true;

	public	is_loading():boolean {return this.loading;}
	public	load():void {this.loading=true;}
	public	stop():void {this.loading=false;}
}
