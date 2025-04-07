import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from '../../services/getcities.service';
import { cityinfo } from './cities-info';
import { NgClass, NgFor } from '@angular/common'; // ✅ Import both

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [NgClass, NgFor], // ✅ Add both here
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'] // ✅ fixed property name
})
export class CitiesComponent implements OnInit {
  cities: cityinfo[] = [];
  color: boolean = true;

  constructor(private _citiesService: GetcitiesService) {}

  ngOnInit() {
    this.cities = this._citiesService.returnCities();
    this.color = this.colorit();
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
