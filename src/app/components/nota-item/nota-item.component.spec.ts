import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaItemComponent } from './nota-item.component';

describe('NotaItemComponent', () => {
  let component: NotaItemComponent;
  let fixture: ComponentFixture<NotaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
