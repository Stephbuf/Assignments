import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent {
  name: string;
  springN: number;
  springM: number;
  summerN: number;
  summerM: number;
  winterN: number;
  winterM: number;
  autumnN: number;
  autumnM: number;
  visitFrom: string;
  visitTo: string;

  constructor(private activatedRoute: ActivatedRoute) {
     this.name = this.activatedRoute.snapshot.paramMap.get('name')!;
     this.springN = parseInt(this.activatedRoute.snapshot.paramMap.get('springN')!);
     this.springM = parseInt(this.activatedRoute.snapshot.paramMap.get('springM')!);
     this.summerN = parseInt(this.activatedRoute.snapshot.paramMap.get('summerN')!);
     this.summerM = parseInt(this.activatedRoute.snapshot.paramMap.get('summerM')!);
     this.winterN = parseInt(this.activatedRoute.snapshot.paramMap.get('winterN')!);
     this.winterM = parseInt(this.activatedRoute.snapshot.paramMap.get('winterM')!);
     this.autumnN = parseInt(this.activatedRoute.snapshot.paramMap.get('autumnN')!);
     this.autumnM = parseInt(this.activatedRoute.snapshot.paramMap.get('autumnM')!);
     this.visitFrom = this.activatedRoute.snapshot.paramMap.get('visitFrom')!;
     this.visitTo = this.activatedRoute.snapshot.paramMap.get('visitTo')!;
   
  }
  

}

