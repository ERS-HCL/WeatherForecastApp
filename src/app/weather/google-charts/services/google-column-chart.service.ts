import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { ColumnChartConfig } from '../models/column-chart.config';


declare var google: any;

@Injectable()
export class GoogleColumnChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildColumnChart(elementId: String, data: any[], config: ColumnChartConfig): void {
    var chartFunc = () => {
      return new google.visualization.ColumnChart(document.getElementById(<string>elementId));
    };
    var options = {
      title: config.title,
      width: { title: config.width },
      height: { title: config.height },
      bar: { groupWidth: '85%' },
      legend: {position:'none'}
    };

    this.buildChart(data, chartFunc, options);
  }
}
