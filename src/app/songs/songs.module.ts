import {NgModule} from '@angular/core';

//This is for feature modules...
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';


//Pipes...
import {FormatSongDatePipe} from './format-song-date.pipe';

//Components...
import {SongComponent}	from './song.component';

//Directives...

@NgModule({
	declarations: [
		SongComponent,
		FormatSongDatePipe,
	],
	imports: [
		SharedModule,
	],
	exports: [
		CommonModule,
		SongComponent,
	],
	providers: [

	]
})
export class SongsModule {

}
