import { Component, OnInit } from 'angular2/core';
//import {Component, Input} from 'angular2/core';
import {Quip} from './quip';
import {QuipService} from './quip.service';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'quip-detail',
    templateUrl: 'app/quip-detail.component.html'
})

export class QuipDetailComponent implements OnInit {
//    @Input()
    quip: Quip;

    ngOnInit() {
	let id = this._routeParams.get('id');
	this._quipService.getQuip(id)
	    .then(quip => this.quip = quip);
    }

    constructor(
	private _quipService: QuipService,
	private _routeParams: RouteParams) {
    }

    goBack() {
	window.history.back();
    }
}
