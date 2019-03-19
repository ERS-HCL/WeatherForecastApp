import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { WeatherReportService } from '../../weather-report.service';
import { ComboChartConfig } from '../../google-charts/models/combo-chart.config';

@Component({
  selector: 'main-forecast',
  templateUrl: './main-forecast.component.html',
  styleUrls: ['../chart.component.css'],
  providers: [DatePipe]
})
export class MainForecastComponent implements OnInit {
  title: string;
 
  config: ComboChartConfig;
  elementId: String;
  comboChartData: any[];
  
  constructor(private _weatherReport: WeatherReportService,
    private _timeFormatPipe: DatePipe) {    
  }

  ngOnInit() {

    let forecasts:any = this._weatherReport.getHourlyForecast();
    this.title =  forecasts.city.name + ', ' + forecasts.city.country;

    this.comboChartData = [];
    this.comboChartData[0] = ['Time', 'Temperature'];
    let time: string = '';
    for (var i = 0; i < 9; i++){
      var date = new Date(forecasts.list[i].dt_txt);
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      time = this._timeFormatPipe.transform(date, 'hh:mm');
      
      this.comboChartData[i+1] = [time, forecasts.list[i].main.temp]
    }   

    this.config = new ComboChartConfig('', 'Temperature', 'Time');
    this.elementId = 'main-forecast1';

    console.log('inside Main = ' + this.title);
  }
}
