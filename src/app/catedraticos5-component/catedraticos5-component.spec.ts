import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catedraticos5Component } from './catedraticos5-component';

describe('Catedraticos5Component', () => {
  let component: Catedraticos5Component;
  let fixture: ComponentFixture<Catedraticos5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catedraticos5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catedraticos5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
