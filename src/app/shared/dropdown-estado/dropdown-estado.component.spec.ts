import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEstadoComponent } from './dropdown-estado.component';

describe('DropdownEstadoComponent', () => {
  let component: DropdownEstadoComponent;
  let fixture: ComponentFixture<DropdownEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
