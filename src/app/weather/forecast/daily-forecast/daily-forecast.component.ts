import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from '../../google-charts/models/pie-chart.config';

@Component({
  selector: 'daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['../chart.component.css']
})
export class DailyForecastComponent implements OnInit {

  title = 'Pune, IN';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;

  // exampleData:any;
  // exampleSchema :any;
  ngOnInit(): void {

    //Piechart1 Data & Config
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat', 3],
    ['Commute', 2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep', 10]];

    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.elementId1 = 'myPieChart1';
    // this.exampleSchema = {
    //   'type': 'object',
    //   'properties': {
    //       '_id': { 'type': 'string' },
    //       'Description': { 'type': 'string' },
    //       'ProductCode': { 'type': 'string' },
    //       'ProductName': { 'type': 'string' }
    //     }
    //   };

    //   this.exampleData = {
    //     '_id': ["5be94deccc98092db403bced", "5be94e1c011e1b2db47fb271"],
    //     'Description': ["", ""],
    //     'ProductCode': ["100", "200"],
    //     'ProductName': ["ABC_mob", "XYZ_chem"],
    //   };
  };

  

  // displayData: any = null;

  // exampleOnSubmitFn(formData) {
  //   this.displayData = formData;
  // }
  
}