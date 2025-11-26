import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatedraticosComponent } from './catedratico2-component';


describe('CatedraticosComponent', () => {
  let component: CatedraticosComponent;
  let fixture: ComponentFixture<CatedraticosComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatedraticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatedraticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
