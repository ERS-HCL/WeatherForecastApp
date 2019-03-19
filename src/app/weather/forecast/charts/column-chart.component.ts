import { Component, Input, OnInit } from '@angular/core';

import { ColumnChartConfig } from '../../google-charts/models/column-chart.config';
import { GoogleColumnChartService } from '../../google-charts/services/google-column-chart.service';

declare var google: any;


@Component({
  selector: 'column-chart',
  template: `<div id="{{elementId}}" style="width: 700px; height: 365px;"></div>`
})
export class ColumnChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: ColumnChartConfig;
  @Input() elementId: string;

  constructor(private _columnChartService: GoogleColumnChartService) { }

  ngOnInit(): void {

    this._columnChartService.BuildColumnChart(this.elementId, this.data, this.config);
  }
}
