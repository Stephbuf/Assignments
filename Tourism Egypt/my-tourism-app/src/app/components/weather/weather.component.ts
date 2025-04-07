import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../cities/cities-info-data';
import { GetweatherService } from '../../services/getweather.service';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weatherData: CityWeather[] = [];
  constructor(private _weatherData:GetweatherService) {}
  ngOnInit() {
    this.weatherData = this._weatherData.returnWeather();
  }
  }

