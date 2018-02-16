import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';

import {SongService} from './song.service';

@NgModule({
})
export class CoreModule {
	public static	forRoot():ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [SongService]
		};
	}
	public	constructor(@Optional() @SkipSelf() guard:CoreModule) {

		console.log("Loading CoreModule");
		if(guard){
			throw new Error('CoreModule was already loaded.');
		}
	}
}
