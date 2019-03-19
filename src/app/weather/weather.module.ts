import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { WeatherComponent } from './weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from "../shared/shared.module";
import { MainForecastComponent } from './forecast/main-forecast/main-forecast.component';
import { DailyForecastComponent } from './forecast/daily-forecast/daily-forecast.component';
import { MapForecastComponent } from './forecast/map-forecast/map-forecast.component';
import { ForecastComponent } from './forecast/forecast.component';


import { AnalysisComponent } from './forecast/analysis/analysis.component';
import { TemperatureChartComponent } from './forecast/analysis/temperature-chart/temperature-chart.component';
import { WindChartComponent } from './forecast/analysis/wind-chart/wind-chart.component';
import { PressureChartComponent } from './forecast/analysis/pressure-chart/pressure-chart.component';
import { PrecipitationChartComponent } from './forecast/analysis/precipitation-chart/precipitation-chart.component';

import { ComboChartComponent } from './forecast/charts/combo-chart.component';
import { ColumnChartComponent } from './forecast/charts/column-chart.component';
import { PieChartComponent } from './forecast/charts/pie-chart.component';
import { LineChartComponent } from './forecast/charts/line-chart.component';
import { MapChartComponent } from './forecast/charts/map-chart.component';

import { GoogleComboChartService } from './google-charts/services/google-combo-chart.service';
import { GooglePieChartService } from './google-charts/services/google-pie-chart.service';
import { GoogleLineChartService } from './google-charts/services/google-line-chart.service';
import { GoogleMapService } from './google-charts/services/google-map.service';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherDetailsComponent,
    ForecastComponent,
    MainForecastComponent,
    DailyForecastComponent,
    MapForecastComponent,
  
    AnalysisComponent,
    TemperatureChartComponent,
    WindChartComponent,
    PressureChartComponent,
    PrecipitationChartComponent,

    ComboChartComponent,
    ColumnChartComponent,
    PieChartComponent,
    LineChartComponent,
    MapChartComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
  ],

  providers: [GoogleComboChartService, GooglePieChartService, GoogleLineChartService, GoogleMapService]
})

export class WeatherModule { }
