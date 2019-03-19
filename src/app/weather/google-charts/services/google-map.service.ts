import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { MapChartConfig } from '../models/map-chart.config';


declare var google: any;

@Injectable()
export class GoogleMapService {

  constructor() {
     google.charts.load('current', { 'packages': ['map'] });
  }

  public BuildMap(elementId: String, data: any[], config: MapChartConfig): void {
    var chartFunc = () => {
      return new google.visualization.Map(document.getElementById(<string>elementId));
    };

    var options = {
      zoomLevel: 12,
      showTooltip: true,
      showInfoWindow: true,
      useMapTypeControl: true,
      maps: {
            // Your custom mapTypeId holding custom map styles.
            styledMap: {
              name: 'Styled Map', // This name will be displayed in the map type control.
              styles: [
                {featureType: 'poi.attraction',
                  stylers: [{color: '#fce8b2'}]
                },
                {featureType: 'road.highway',
                  stylers: [{hue: '#0277bd'}, {saturation: -50}]
                },
                {featureType: 'road.highway',
                  elementType: 'labels.icon',
                  stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
                },
                {featureType: 'landscape',
                  stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
                }
          ]}}
    };

    this.createMap(data, chartFunc, options);
  }

  createMap(data: any[], chartFunc: any, options: any): void {
    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };

    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
}
