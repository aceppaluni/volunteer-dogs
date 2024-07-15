import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './dog.component';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
