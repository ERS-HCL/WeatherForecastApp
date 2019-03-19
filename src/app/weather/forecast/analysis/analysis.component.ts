import { Component, OnInit } from '@angular/core';
import { WeatherReportService } from '../../weather-report.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  title: string = '';

  constructor(private _weatherReport: WeatherReportService) {
  }

  ngOnInit() {
    this.title = this._weatherReport.getCityName();
  }

}
