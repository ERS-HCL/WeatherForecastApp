import { Component, Input, OnInit } from '@angular/core';

import { GoogleMapService } from '../../google-charts/services/google-map.service';
import { MapChartConfig } from '../../google-charts/models/map-chart.config';

declare var google: any;


@Component({
  selector: 'map-chart',
  template: `<div id="{{elementId}}" style="width: 700px; height: 365px;"></div>`
})
export class MapChartComponent implements OnInit {

  @Input('data') data: any[];
  @Input('config') config: MapChartConfig;
  @Input('elementId') elementId: string;

  constructor(private _mapChartService: GoogleMapService) { }

  ngOnInit(): void {

    this._mapChartService.BuildMap(this.elementId, this.data, this.config);
  }
}
