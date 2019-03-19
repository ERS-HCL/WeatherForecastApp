import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { WeatherReportService } from '../weather/weather-report.service';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient,
              private _weatherReport: WeatherReportService) {
    console.log('Production=' + environment.production);
  }

  /*
   gets the current weather data for the city
   */
  fetchWeatherByCity(cityName) {

    this.httpClient.get<any>(
        environment.baseUrl +
          'weather?q=' + cityName +
          '&appid=' + environment.appId +
          '&units=' + environment.units, {
            observe: 'body',
            responseType: 'json'
      })
      .pipe(map((data:any) => {
        return data;
      }))
      .subscribe((currentWeather) => {
        this._weatherReport.setCurrentWeather(currentWeather);        
      });   
  }

  /*
   gets the 5 day / 3 hour forcast data
   */ 
  fetchHourlyWeatherForecast(cityName: string) {  

    this.httpClient.get<any>(
      environment.baseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units, {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(map((weatherForecast) => {       
        return weatherForecast;
      }))
      .subscribe((forecastData : any) => {
        this._weatherReport.setHourlyForecast(forecastData);
        this._weatherReport.setCityName(cityName);
      });
  }

  /*
  gets the 13 day weather forecast for the city
  */
  fetchDailyWeatherForecast(cityName: string) {

    this.httpClient.get<any>(
      environment.baseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units +
      '&cnt=' + 13,
      {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(map((weatherForecast) => {
        return weatherForecast;
      }))
      .subscribe((forecastData: any) => {
        this._weatherReport.setDailyForecast(forecastData);
      });
  }
}
