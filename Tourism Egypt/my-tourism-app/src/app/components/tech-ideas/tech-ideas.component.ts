import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule
} from '@angular/forms';
import { GetcitiesService } from '../../services/getcities.service';
import { NgIf, NgFor } from '@angular/common'; // optional, for error displays or dropdowns

@Component({
  selector: 'app-tech-ideas',
  standalone: true, // ✅ required for standalone components
  imports: [ReactiveFormsModule, NgIf, NgFor], // ✅ add required modules here
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

  onClick() {
    console.log(this.techIdeasForm.controls['brief'].value);
    this.techIdeasForm.reset();
  }
}

// Custom validators
export function cannotContainTourist(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value?.toLowerCase().includes('tourist') ? { containsTourist: true } : null;
  };
}

export function cannotContainNothing(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value?.toLowerCase().includes('nothing') ? { containsNothing: true } : null;
  };
}
