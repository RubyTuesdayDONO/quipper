import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import {QuipDetailComponent} from './quip-detail.component';
import {QuipService} from './quip.service';
import {Quip} from './quip';

@Component({
    selector: 'quips',
    directives: [QuipDetailComponent],
    templateUrl: 'app/quips.component.html'
})

export class QuipsComponent implements OnInit {
    title = 'Tour of Quips';

    quips: Quip[];
    selectedQuip: Quip;

    constructor(
	private _router: Router,
	private _quipService: QuipService) { }

    getQuips() {
	this._quipService.getQuips().then(quips => this.quips = quips);
    }

    ngOnInit() {
	this.getQuips();
    }

    onSelect(quip: Quip) { this.selectedQuip = quip; }

    gotoDetail() {
	this._router.navigate(['QuipDetail', { id: this.selectedQuip.id }]);
    }
}
