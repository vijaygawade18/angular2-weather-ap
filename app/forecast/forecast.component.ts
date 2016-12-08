import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather/weather.svc";
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl:"app/forecast/forecast.html",
    styleUrls:["app/app-component.css"],
    providers:[WeatherService]
})

export class ForecastComponent implements OnInit{
    public forecast:string[];
    errorMsg:string;

    opts: any;
    constructor(
        private _route: ActivatedRoute,
        private _forecastService: WeatherService
    ){
        this.opts = {
            width: 500,
            height: 600
        };
    }

    updates() {
        this.opts = {
            name: 'micronyks'
        };
    }

    ngOnInit(){
        if(this._route.params['value'].id !== undefined){
            this.getForecast(this._route.params['value'].id);
        }
    }

    getForecast(id:string){
        this._forecastService.getForecast(id)
            .subscribe(response => this.forecast = response,
                resError => this.errorMsg = resError);
    }

    getTime(dt:number){
        return new Date (dt * 1000);
    }

}