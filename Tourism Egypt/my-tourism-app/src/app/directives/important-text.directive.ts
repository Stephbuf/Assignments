import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantText]'
})
export class ImportantTextDirective {

  constructor(private e1: ElementRef) {
    e1.nativeElement.style.background = "yellow";}
  }

