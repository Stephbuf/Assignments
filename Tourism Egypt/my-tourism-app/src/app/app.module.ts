import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { ImportantTextDirective } from "./directives/important-text.directive";
import { TechIdeaComponent } from "./components/tech-ideas/tech-ideas.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    ImportantTextDirective,
    TechIdeaComponent
  ],
  imports: [
    BrowserModule,        
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
