import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';

import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @ViewChild('f') cityForm: NgForm;
    cityName: string;
    errorMessage: string;  
   
    constructor(private _weatherService: WeatherService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
      let value = form.value;
      this.cityName = value.cityName;
      this.cityName = this.cityName.trim();
      if (this.cityName.length > 0) {
        console.log("inside the two way:" + this.cityName);

        this._weatherService.fetchWeatherByCity(this.cityName);
        this._weatherService.fetchHourlyWeatherForecast(this.cityName);
        this._weatherService.fetchDailyWeatherForecast(this.cityName);

        this.router.navigate(['weather'], { relativeTo: this.route });
      }    
         
      form.reset();      
    }
}
