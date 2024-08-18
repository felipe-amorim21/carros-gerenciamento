import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosformComponent } from './carrosform.component';

describe('CarrosformComponent', () => {
  let component: CarrosformComponent;
  let fixture: ComponentFixture<CarrosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
