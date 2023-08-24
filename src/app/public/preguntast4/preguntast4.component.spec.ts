import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntast4Component } from './preguntast4.component';

describe('Preguntast4Component', () => {
  let component: Preguntast4Component;
  let fixture: ComponentFixture<Preguntast4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Preguntast4Component]
    });
    fixture = TestBed.createComponent(Preguntast4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
