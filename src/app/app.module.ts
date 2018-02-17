import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent }	from './app.component';

//Custom modules...
import {SharedModule}	from './shared/shared.module';
import {LayoutModule} 	from './layout/layout.module';
import {SongsModule} 	from './songs/songs.module';
import {AppRouting}	from './app.routing';
import {CoreModule} 	from './core/core.module';
import {PublicModule}	from './public/public.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		SharedModule,
		LayoutModule,
		SongsModule,
		HttpClientModule,
		PublicModule,
		CoreModule.forRoot(),
		AppRouting,
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
