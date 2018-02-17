import {Component, OnInit} from '@angular/core';

import {WindowTitleService} from '../core/window-title.service';

@Component({
	templateUrl: './not-found-404.component.html',
	styleUrls: ['./not-found-404.component.css']
})
export class NotFound404Component implements OnInit {

	//TODO: Perhaps we can adopt other solution for the title thing.
	public	constructor(private wts:WindowTitleService) {

	}

	public	ngOnInit() {

		this.wts.set_title("page not found");
	}

}
