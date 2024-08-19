import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasformComponent } from './marcasform.component';

describe('MarcasformComponent', () => {
  let component: MarcasformComponent;
  let fixture: ComponentFixture<MarcasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
