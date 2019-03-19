import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { ComboChartConfig } from '../models/combo-chart.config';


declare var google: any;

@Injectable()
export class GoogleComboChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildComboChart(elementId: String, data: any[], config: ComboChartConfig) : void {
    var chartFunc = () => {
      return new google.visualization.ComboChart(document.getElementById(<string>elementId));
    };

    var options = {
      title : config.title,
      vAxis: {title: config.vAxis},
      hAxis: {title: config.hAxis},
      seriesType: 'bars'
      };

    this.buildChart(data, chartFunc, options);
  }
}
