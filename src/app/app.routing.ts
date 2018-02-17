import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {SongComponent} from './songs/song.component';
import {NotFound404Component} from './public/not-found-404.component';

const routes=[
	{path: '', redirectTo: 'newest', pathMatch:'full'},
	{path: 'newest', component: SongComponent},
	//TODO
	{path: 'all', component: NotFound404Component},
	{path: 'song/:slug', component: SongComponent},
	{path: '404', component: NotFound404Component},
	{path: '**', component: NotFound404Component}
];

export const AppRouting=RouterModule.forRoot(routes);
