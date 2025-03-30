import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  photo: String = "https://shop.staplescopyandprint.ca/cdn/shop/files/SP_1380x1380_PhotoGiftsNotebook_1800x1800.jpg?v=1727879425"
constructor() { }

ngOnInit() {
  
}
}
