import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaDerecha } from './columna-derecha';

describe('ColumnaDerecha', () => {
  let component: ColumnaDerecha;
  let fixture: ComponentFixture<ColumnaDerecha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaDerecha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnaDerecha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
