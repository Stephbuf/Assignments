import { Injectable } from '@angular/core';
import { GetweatherService } from './getweather.service';
import { CityWeather } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {
arrayWeather: CityWeather[] = [];
arrayNames: string[] =[];
  constructor(private _getW: GetweatherService) {
   }
   getNames() {
    this.arrayWeather=this._getW.returnWeather();
    for(var i=0;i<this.arrayWeather.length;i++){
      this.arrayNames.push(this.arrayWeather[i].name);
    }
    return this.arrayNames;
   }
}
