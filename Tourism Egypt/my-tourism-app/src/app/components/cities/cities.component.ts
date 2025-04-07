import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from '../../services/getcities.service';
import { cityinfo } from './cities-info';

@Component({
  selector: 'app-cities',
  imports: [],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {
  cities: cityinfo[] = [];
  color: boolean = true;

  constructor(private _citiesService: GetcitiesService) {}

  ngOnInit() {
    this.cities=this._citiesService.returnCities();
    this.color=this.colorit();
  }

  colorit() {
    for (var i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length < 3) {
        return false;
      }
    }
    return true;
  }
}

