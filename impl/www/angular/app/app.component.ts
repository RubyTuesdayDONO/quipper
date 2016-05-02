import { Component }       from 'angular2/core';
import { DashboardComponent }     from './dashboard.component';
import { QuipService }     from './quip.service';
import { QuipsComponent } from './quips.component';
import { QuipDetailComponent } from './quip-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'quipper',
    //    templateUrl: 'app/app.component.html',
    template: `
<h1>{{title}}</h1>
<nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Quips']">Quips</a>
</nav>
<router-outlet></router-outlet>
`,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
	ROUTER_PROVIDERS,
	QuipService
    ]
})

@RouteConfig([
    {
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
    },
    {
	path: '/quips',
	name: 'Quips',
	component: QuipsComponent
    },
    {
	path: '/quip/:id',
	name: 'QuipDetail',
	component: QuipDetailComponent
    },
])

export class AppComponent {
    title = 'Quipper';


}
