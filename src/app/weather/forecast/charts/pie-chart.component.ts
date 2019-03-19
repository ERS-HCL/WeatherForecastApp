import { Component, OnInit, Input} from '@angular/core';
import { GooglePieChartService } from '../../google-charts/services/google-pie-chart.service';
import { PieChartConfig } from '../../google-charts/models/pie-chart.config';

@Component({
  selector: 'pie-chart',
  template: `<div id="{{elementId}}" style="width: 700px; height: 365px;"></div>`
})
export class PieChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: PieChartConfig;
  @Input() elementId: string;

  constructor(private _pieChartService: GooglePieChartService) { }

  ngOnInit(): void {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
  }

}
