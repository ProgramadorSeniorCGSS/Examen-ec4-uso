import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditPComponent } from './modal-edit-p.component';

describe('ModalEditPComponent', () => {
  let component: ModalEditPComponent;
  let fixture: ComponentFixture<ModalEditPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditPComponent]
    });
    fixture = TestBed.createComponent(ModalEditPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
