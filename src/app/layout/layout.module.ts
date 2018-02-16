import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {LoaderComponent} from './loader.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';

@NgModule({
	declarations: [
		LoaderComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		SharedModule,
/*		RouterModule, */
	],
	exports: [
		LoaderComponent,
		HeaderComponent,
		FooterComponent,
	]
})
export class LayoutModule {

}
