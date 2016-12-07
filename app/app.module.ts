import { NgModule,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent }  from './app.component';
import {DashboardComponent} from "./layout/shell.component";
import {SearchComponent} from "./search/search.component";
import {WeatherComponent} from "./weather/weather.component";
import {ForecastComponent} from "./forecast/forecast.component";
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import {HighChartComponent} from "./highchart/highchart.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    RouterModule.forRoot([
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'weather/:id',
        component: WeatherComponent
      },
      {
        path: 'forecast/:id',
        component: ForecastComponent
      },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    ForecastComponent,
    WeatherComponent,
    HighChartComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
