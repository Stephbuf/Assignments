import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIdeaComponent } from './tech-ideas.component';

describe('TechIdeasComponent', () => {
  let component: TechIdeaComponent;
  let fixture: ComponentFixture<TechIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechIdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
