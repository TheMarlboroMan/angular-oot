import {NgModule} from '@angular/core';

//This is for feature modules...
import {CommonModule} from '@angular/common';

//Pipes...
import {BypassHtmlSanitizerPipe}	from './bypass-html-sanitizer.pipe';

//Components...

//Directives...

@NgModule({
	declarations: [
		BypassHtmlSanitizerPipe,
	],
	imports: [

	],
	exports: [
		CommonModule,
		BypassHtmlSanitizerPipe,
	],
	providers: [

	]
})
export class SharedModule {

}
