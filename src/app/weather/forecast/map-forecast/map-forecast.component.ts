import { Component, OnInit } from '@angular/core';

import { WeatherReportService } from '../../weather-report.service';
import { MapChartConfig } from '../../google-charts/models/map-chart.config';

@Component({
  selector: 'map-forecast',
  templateUrl: './map-forecast.component.html',
  styleUrls: ['../chart.component.css']
})
export class MapForecastComponent implements OnInit {

  title: string;

  config: MapChartConfig;
  elementId: String;
  mapData: any[];

  constructor(private _weatherReport: WeatherReportService) {
  }


  ngOnInit() {

    let weather: any = this._weatherReport.getCurrentWeather(); 
    this.title = weather.name + ', ' + weather.sys.country;

    this.mapData = [];
    this.mapData[0] = ['Lat', 'Long', 'City'];
    this.mapData[1] = [weather.coord.lat, weather.coord.lon, weather.name];

    this.config = new MapChartConfig('');
    this.elementId = 'map-forecast';

    console.log('inside Map = ' + this.title);
  }

}
