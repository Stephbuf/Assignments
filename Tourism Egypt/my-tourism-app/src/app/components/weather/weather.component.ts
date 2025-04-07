
import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../cities/cities-info-data';
import { GetweatherService } from '../../services/getweather.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [NgFor, RouterModule],
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

