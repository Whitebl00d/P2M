import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreditingComponent } from './prediting.component';

describe('PreditingComponent', () => {
  let component: PreditingComponent;
  let fixture: ComponentFixture<PreditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
