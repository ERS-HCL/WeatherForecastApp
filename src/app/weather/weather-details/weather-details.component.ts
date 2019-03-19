import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input('WeatherItem') weather: Weather;
    srcImg: string;
    today :number;

  constructor() { }

  ngOnInit() {                   
    this.today = Date.now();
    this.srcImg = "http://openweathermap.org/img/w/";
  }
}
