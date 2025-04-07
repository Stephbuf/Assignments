import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { GetcitiesService } from '../../services/getcities.service';

@Component({
  selector: 'app-tech-ideas',
  imports: [],
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeaComponent implements OnInit {
  cities: string[] = [];
  techIdeasForm!: FormGroup;

  constructor(
    private _cityService: GetcitiesService,
    private formB: FormBuilder
  ) {}

  ngOnInit() {
    this.cities = this._cityService.getNames();

    this.techIdeasForm = this.formB.group({
      name: ['', [Validators.required, Validators.minLength(3), cannotContainTourist()]],
      age: [''],
      email: ['', Validators.required],
      city: ['', Validators.required],
      brief: ['', [Validators.required, Validators.minLength(100), cannotContainNothing()]]
    });
  }

  // Method moved inside the class
  onClick() {
    console.log(this.techIdeasForm.controls['brief'].value); // Log brief value
    this.techIdeasForm.reset(); // Clear the form
  }
}

// Custom validator for name (should not contain the word "tourist")
export function cannotContainTourist(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value?.toLowerCase().includes('tourist') ? { containsTourist: true } : null;
  };
}

// Custom validator for brief (should not contain the word "nothing")
export function cannotContainNothing(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value?.toLowerCase().includes('nothing') ? { containsNothing: true } : null;
  };
}
