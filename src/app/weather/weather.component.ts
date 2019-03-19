import { Component, OnInit, Input} from '@angular/core';

import { Weather } from './weather.model';
import { WeatherReportService } from './weather-report.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public currentWeatherData: any;
  constructor(private weatherReport: WeatherReportService) { }
  ngOnInit() {
    console.log("Current city is " + this.weatherReport.getCityName());
  }
}
