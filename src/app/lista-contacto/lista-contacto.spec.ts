import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContacto } from './lista-contacto';

describe('ListaContacto', () => {
  let component: ListaContacto;
  let fixture: ComponentFixture<ListaContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
