import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

    public config = {
        params:{
            apiKey: "1f70360a624b51d457b80b80029aaef5"
        }
    };

    locationUrl: string = "http://api.openweathermap.org/data/2.5/find?q=";
    currentWeatherUrl: string =  'http://api.openweathermap.org/data/2.5/weather?id=';
    forecastWeatherUrl: string =  'http://api.openweathermap.org/data/2.5/forecast/daily?id=';

    constructor (private http: Http) {}

    findByLocation (searchStr:string) {
        let apiUrl = this.locationUrl  + searchStr + '&appId=' + this.config.params.apiKey;
        return this.http.get(apiUrl)
            .map((response: Response)=> response.json())
            .catch(this._errorHandler);
    }

    getCurrentWeather (id:string){
        let currentUrl = this.currentWeatherUrl + id + '&appId=' + this.config.params.apiKey;
        return this.http.get(currentUrl)
            .map((response: Response)=> response.json())
            .catch(this._errorHandler);
    }

    getForecast (id:string){
        let forecastUrl = this.forecastWeatherUrl+ id + '&appId=' + this.config.params.apiKey;
        return this.http.get(forecastUrl)
            .map((response: Response)=> response.json())
            .catch(this._errorHandler);
    }

    // error handler method
    _errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server error")
    }
}