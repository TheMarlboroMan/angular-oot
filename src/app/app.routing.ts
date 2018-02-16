import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {SongComponent} from './songs/song.component';

const routes=[
	{path: '', redirectTo: 'newest', pathMatch:'full'},
	{path: 'newest', component: SongComponent},
	{path: 'song/:slug', component: SongComponent},
];

export const AppRouting=RouterModule.forRoot(routes);
