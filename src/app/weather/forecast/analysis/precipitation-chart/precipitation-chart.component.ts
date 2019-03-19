import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { LineChartConfig } from '../../../google-charts/models/line-chart.config';
import { WeatherReportService } from '../../../weather-report.service';

@Component({
  selector: 'precipitation-chart',
  templateUrl: './precipitation-chart.component.html',
  styleUrls: ['../../chart.component.css'],
  providers: [DatePipe]
})
export class PrecipitationChartComponent implements OnInit {

  config: LineChartConfig;
  elementId: String;
  lineChartdata: any[];

  constructor(private _weatherReport: WeatherReportService,
    private _timeFormatPipe: DatePipe) {
  }

  ngOnInit() {

    let forecasts: any = this._weatherReport.getHourlyForecast();

    this.lineChartdata = [];
    this.lineChartdata[0] = ['Time', 'Precipitation', { type: 'string', role: 'tooltip' }];
    let count: number = +forecasts.cnt;
    let time: string = '';
    let tooltip: string = '';
    for (var i = 0; i < count; i++) {
      var date = new Date(forecasts.list[i].dt_txt);
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

      time = this._timeFormatPipe.transform(date, 'MMM d');
      tooltip = 'Precipitation  on ' + this._timeFormatPipe.transform(date, 'MMM d, hh:mm a ') + ' is ' + forecasts.list[i].rain + ' mm';

      this.lineChartdata[i + 1] = [time, forecasts.list[i].rain, tooltip];
    }

    this.config = new LineChartConfig('Precipitation');
    this.elementId = 'precipitation-chart';
  }

}
