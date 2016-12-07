import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    public config = {
        params:{
            apiKey: "1f70360a624b51d457b80b80029aaef5"
        }
    };
    constructor (private http: Http) {}

    findByLocation (searchStr:string): Promise<any[]> {
        let locationUrl =  "http://api.openweathermap.org/data/2.5/find?q="+searchStr;
        let apiUrl = locationUrl+'&appId=1f70360a624b51d457b80b80029aaef5';
        return this.http.get(apiUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getCurrentWeather (id:string): Promise<any[]> {
        let currentWeatherUrl =  'http://api.openweathermap.org/data/2.5/weather?id='+id;
        let apiUrl = currentWeatherUrl+'&appId=1f70360a624b51d457b80b80029aaef5';
        return this.http.get(apiUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getForecast (id:string): Promise<any[]> {
        let forecastWeatherUrl =  'http://api.openweathermap.org/data/2.5/forecast/daily?id='+id;
        let apiUrl = forecastWeatherUrl+'&appId=1f70360a624b51d457b80b80029aaef5';
        return this.http.get(apiUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}