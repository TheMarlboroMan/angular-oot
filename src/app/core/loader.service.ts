import {Injectable} 		from '@angular/core';
import {LoaderComponent}	from '../layout/loader.component';

/* This is actually a lazy solution ... */

@Injectable()
export class LoaderService {

	private component:LoaderComponent=null;

	public	register(c:LoaderComponent) {
		
		if(this.component) {
			throw new Error("Component already registered in LoaderService");
		}

		this.component=c;
	}

	public	set_loading(value:boolean) {

		if(!this.component) {
			throw new Error("Component not registered in LoaderService");
		}

		if(value) this.component.load();
		else this.component.stop();
	}
}
