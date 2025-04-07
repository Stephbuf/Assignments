import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // ✅ import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet], // ✅ add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName: string = "Stephanie";
  title = 'my-tourism-app';
}
