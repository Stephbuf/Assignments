import { Injectable } from '@angular/core';
import { citiesWeather } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor() { }

  returnWeather() {
    return citiesWeather
  }
  
  }
  
