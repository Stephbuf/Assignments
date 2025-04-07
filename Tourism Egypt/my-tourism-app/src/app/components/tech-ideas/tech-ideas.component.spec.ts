import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIdeasComponent } from './tech-ideas.component';

describe('TechIdeasComponent', () => {
  let component: TechIdeasComponent;
  let fixture: ComponentFixture<TechIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
