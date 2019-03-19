import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { LineChartConfig } from '../models/line-chart.config';


declare var google: any;

@Injectable()
export class GoogleLineChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildLineChart(elementId: String, data: any[], config: LineChartConfig): void {
    var chartFunc = () => {
      return new google.visualization.LineChart(document.getElementById(<string>elementId));
    };

    var options = {
      title: config.title,     
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    this.buildChart(data, chartFunc, options);
  }
}
