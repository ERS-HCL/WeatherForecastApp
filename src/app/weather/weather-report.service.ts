import { Injectable } from '@angular/core';
import { Weather } from './weather.model';

@Injectable()
export class WeatherReportService {
    private currentWeatherData: any;
    private hourlyForecastData: any;  
    private dailyForecastData: any;
    private cityName: string;

    constructor() {
      this.currentWeatherData = null;
      this.hourlyForecastData = null;
      this.dailyForecastData = null;
    }

    setCurrentWeather(weatherData: Weather) {
      this.currentWeatherData = weatherData;
    }
    getCurrentWeather() {
      return this.currentWeatherData;
    }

    setHourlyForecast(forecastData: Weather) {
      this.hourlyForecastData = forecastData;
    }

    getHourlyForecast() {
      return this.hourlyForecastData;
    }

    setDailyForecast(forecastData: Weather) {
      this.dailyForecastData = forecastData;
    }

    getDailyForecast() {
      return this.dailyForecastData;
    }

    setCityName(name: string) {
      this.cityName = name;
    }
   getCityName() {
      return this.cityName;
  }
}
