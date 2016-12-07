import { Component } from '@angular/core';


@Component({
    selector:"dashboard",
    template: `
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navabar-brand" href="#">
                        {{title}}
                    </a>
                </div>
            </div>
        </nav>
    
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
    styleUrls:["app/app-component.css"]

})

export class DashboardComponent{
    title = 'Weather Dashboard';

}