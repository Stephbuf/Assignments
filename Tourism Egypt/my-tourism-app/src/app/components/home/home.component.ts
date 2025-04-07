import { Component } from '@angular/core';
import { NgClass } from '@angular/common'; // ✅ Import NgClass

@Component({
  selector: 'app-home',
  standalone: true, // ✅ Make it standalone
  imports: [NgClass], // ✅ Include NgClass here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Use correct property name
})
export class HomeComponent {
  pyramidsUrl = "https://cdn.pixabay.com/photo/2016/02/02/18/33/sphinx-1175828__340.jpg";

}
