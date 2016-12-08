import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.svc";
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl:"app/weather/weather.html",
    providers:[WeatherService]

})

export class WeatherComponent implements OnInit{
    public current: string[];
    errorMsg:string;
    
    constructor(
        private _route: ActivatedRoute,
        private _currentWeather:WeatherService
    ){}

    ngOnInit() {
        if(this._route.params['value'].id !== undefined){
            this.getCurrent(this._route.params['value'].id);
        }
    }
    getCurrent(id:string){
        this._currentWeather.getCurrentWeather(id)
            .subscribe(response => this.current = response,
                resError => this.errorMsg = resError);
    }

    getTime(dt:number){
        return new Date (dt * 1000);
    }

}