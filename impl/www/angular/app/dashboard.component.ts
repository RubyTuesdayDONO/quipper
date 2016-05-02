import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Quip } from './quip';
import { QuipService } from './quip.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    quips: Quip[] = [];

    constructor (
	private _router: Router,
	private _quipService: QuipService ) {
    }

    ngOnInit() {
	this._quipService.getQuips()
	    .then(quips => this.quips = quips.slice(0,5));
    }

    gotoDetail(quip: Quip) {
	let link = ['QuipDetail', { id: quip.id }];
	this._router.navigate(link);
    }
}
