import { Component } from '@angular/core';
import {WeatherService} from "../weather/weather.svc";

@Component({
    selector:"search-input",
    templateUrl:"app/search/search.html",
    styleUrls:["app/app-component.css"],
    providers:[WeatherService]

})

export class SearchComponent{
    public cities: string[];
    errorMsg: string;
    constructor(public _weatherService:WeatherService){
    }
    onSearch(searchStr: string){
        this._weatherService.findByLocation(searchStr)
            .subscribe(response => this.cities = response['list'],
                        resError => this.errorMsg = resError);
    }
}