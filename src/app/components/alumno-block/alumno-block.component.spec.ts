import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoBlockComponent } from './alumno-block.component';

describe('AlumnoBlockComponent', () => {
  let component: AlumnoBlockComponent;
  let fixture: ComponentFixture<AlumnoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
