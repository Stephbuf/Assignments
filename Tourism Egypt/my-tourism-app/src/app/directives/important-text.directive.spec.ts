import { ImportantTextDirective } from './important-text.directive';
import { ElementRef } from '@angular/core';

describe('ImportantTextDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ImportantTextDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
