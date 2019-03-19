import { Component, Input, OnInit } from '@angular/core';

import { GoogleLineChartService } from '../../google-charts/services/google-line-chart.service';
import { LineChartConfig } from '../../google-charts/models/line-chart.config';

declare var google: any;


@Component({
  selector: 'line-chart',
  template: `<div id="{{elementId}}" style="width: 700px; height: 365px;"></div>`
})
export class LineChartComponent implements OnInit {

  @Input('data') data: any[];
  @Input('config') config: LineChartConfig;
  @Input('elementId') elementId: string;

  constructor(private _lineChartService: GoogleLineChartService) { }

  ngOnInit(): void {

    this._lineChartService.BuildLineChart(this.elementId, this.data, this.config);
  }
}
