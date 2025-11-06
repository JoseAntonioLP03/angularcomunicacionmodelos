import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menulistaproductos } from './menulistaproductos';

describe('Menulistaproductos', () => {
  let component: Menulistaproductos;
  let fixture: ComponentFixture<Menulistaproductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Menulistaproductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menulistaproductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
