import {Injectable} 	from '@angular/core';
import {Title} 		from '@angular/platform-browser';

@Injectable()
export class WindowTitleService {

	public	constructor(private ts:Title) {

	}

	public set_title(val:string) {

		this.ts.setTitle("Object-oriented-tunes : "+val);
	}
}

/*
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
    .filter((event) => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .map((route) => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    })
    .filter((route) => route.outlet === 'primary')
    .mergeMap((route) => route.data)
    .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}
*/
