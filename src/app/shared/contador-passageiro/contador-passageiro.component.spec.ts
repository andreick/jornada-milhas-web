import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPassageiroComponent } from './contador-passageiro.component';

describe('ContadorPassageiroComponent', () => {
  let component: ContadorPassageiroComponent;
  let fixture: ComponentFixture<ContadorPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorPassageiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
