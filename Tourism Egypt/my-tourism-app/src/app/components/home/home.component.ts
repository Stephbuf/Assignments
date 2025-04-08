import { Component } from '@angular/core';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [NgClass], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // 
})
export class HomeComponent {
  pyramidsUrl = "https://cdn.pixabay.com/photo/2016/02/02/18/33/sphinx-1175828__340.jpg";

}
