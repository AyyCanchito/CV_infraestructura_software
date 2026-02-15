import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaIzquierda } from './columna-izquierda';

describe('ColumnaIzquierda', () => {
  let component: ColumnaIzquierda;
  let fixture: ComponentFixture<ColumnaIzquierda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaIzquierda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnaIzquierda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
