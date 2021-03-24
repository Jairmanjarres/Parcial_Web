import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionaConsultaComponent } from './reservaciona-consulta.component';

describe('ReservacionaConsultaComponent', () => {
  let component: ReservacionaConsultaComponent;
  let fixture: ComponentFixture<ReservacionaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
