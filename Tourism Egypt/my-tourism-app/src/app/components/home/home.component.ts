import { Component,  } from '@angular/core';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [NgClass], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  pyramidsUrl = "https://cdn.pixabay.com/photo/2016/02/02/18/33/sphinx-1175828__340.jpg";
  pyramidUrl2 = "https://media.istockphoto.com/id/178375366/photo/full-sphynx-profile-pyramid-giza-egypt.jpg?s=612x612&w=0&k=20&c=qtwWxnlVtMLTveuGchQSEyHgU2XNgMnZfz6egnMg0sI=";
  pyramidUrl3 = "https://lp-cms-production.imgix.net/2023-10/iStock-528618186-RFC.jpg";
  pyramidUrl4 = "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F99fb9468-4b44-406d-a4c2-5646791b6367.jpg?crop=1350%2C900%2C125%2C0";

}


