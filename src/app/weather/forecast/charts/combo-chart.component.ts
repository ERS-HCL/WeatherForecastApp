import { Component, Input, OnInit } from '@angular/core';

import { GoogleComboChartService } from '../../google-charts/services/google-combo-chart.service';
import { ComboChartConfig } from '../../google-charts/models/combo-chart.config';

declare var google: any;


@Component({
  selector: 'combo-chart',
  template: `<div id="{{elementId}}" style="width: 700px; height: 365px;"></div>`
})
export class ComboChartComponent implements OnInit {

  @Input('data') data: any[];
  @Input('config') config: ComboChartConfig;
  @Input('elementId') elementId: string;

  constructor(private _comboChartService: GoogleComboChartService) { }

  ngOnInit(): void {

    this._comboChartService.BuildComboChart(this.elementId, this.data, this.config);
  }
}
