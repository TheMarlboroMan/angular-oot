import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {SERVER_STATUS} from './server-responses';
import {SERVER_API_URLS} from './server-api-urls';

import {SongModel} from '../songs/song.model';

export class SingleSongResponse {

	public model:SongModel=null;
	public next:string=null;
	public previous:string=null;
};

function response_to_single_song(response):SingleSongResponse {

	if(SERVER_STATUS.STATUS_CODE_OK!=response['status']) {
		//TODO.
		console.log("FAILED GETTING SHIT!!!");
		throw new Error('Resource not found!');
	}

	console.log(response);
	let result=new SingleSongResponse();
	result.next=response['body']['next'];
	result.previous=response['body']['previous'];
	result.model=response['body']['song'];
	result.model.date=new Date(result.model.date); //Lol.
	return result;
}

@Injectable()
export class SongService {

	public	constructor(
		private http:HttpClient
	) {}

	public	get_latest():Promise<SingleSongResponse> {

		//The "observe" thing is needed so we can parse the full response.
		return this.http.get(SERVER_API_URLS.API_LATEST_SONG, {observe: 'response'})
			.toPromise()
			.then(response_to_single_song)
			.catch(error => {throw error;});
	}

	public	get_by_slug(slug:string):Promise<SingleSongResponse> {

		return this.http.get(SERVER_API_URLS.API_SONG_BY_SLUG+slug, {observe: 'response'})
			.toPromise()
			.then(response_to_single_song)
			.catch(error => {throw error;});
	}
}
