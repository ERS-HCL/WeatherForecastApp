import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { WeatherComponent } from './weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { MainForecastComponent } from './forecast/main-forecast/main-forecast.component';
import { DailyForecastComponent } from './forecast/daily-forecast/daily-forecast.component';
import { MapForecastComponent } from './forecast/map-forecast/map-forecast.component';
import { AnalysisComponent } from './forecast/analysis/analysis.component';
import { TemperatureChartComponent } from './forecast/analysis/temperature-chart/temperature-chart.component';
import { WindChartComponent } from './forecast/analysis/wind-chart/wind-chart.component';
import { PressureChartComponent } from './forecast/analysis/pressure-chart/pressure-chart.component';
import { PrecipitationChartComponent } from './forecast/analysis/precipitation-chart/precipitation-chart.component';

const weatherRoutes: Routes = [
  {
    path: '', component: WeatherComponent, children: [
      { path: 'weather-detail', component: WeatherDetailsComponent },   
      { path: 'main', component: MainForecastComponent },
      { path: 'daily', component: DailyForecastComponent },
      {
        path: 'analysis', component: AnalysisComponent, children: [
          { path: 'temperature', component: TemperatureChartComponent },
          { path: 'wind', component: WindChartComponent },
          { path: 'pressure', component: PressureChartComponent }
          //,{ path: 'precipitation', component: PrecipitationChartComponent }
        ]
      },

      { path: 'map', component: MapForecastComponent },
       { path: '**', redirectTo: '../home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(weatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
