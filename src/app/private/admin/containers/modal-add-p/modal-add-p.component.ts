import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-add-p',
  templateUrl: './modal-add-p.component.html',
  styleUrls: ['./modal-add-p.component.scss']
})
export class ModalAddPComponent {

  Form = this.fb.group({
    questionText: ['', [Validators.required]],
    option1: ['', [Validators.required]],
    option2: ['', [Validators.required]],
    option3: ['', [Validators.required]],
    option4: ['', [Validators.required]],
    correct: [1,[Validators.required]],//es un radiogroup 
  });

  correctIndex =1;
  options: any[] =[];

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal,private service: PreguntasService) {}

  guardar(){
    this.service.addQuestion(this.procesarFormulario())
    .then(response => {
      Swal.fire('Agregado con exito', '', 'success');
    }).catch(
      error => {
        Swal.fire('Error al agregar', '', 'error');
      }
    );
      this.activeModal.close();
  }

  procesarFormulario():any {
    const questionText = this.Form.value.questionText;
    this.options = [
      { text: this.Form.value.option1 },
      { text: this.Form.value.option2 },
      { text: this.Form.value.option3 },
      { text: this.Form.value.option4 },
    ];

    this.correctIndex = parseInt(this.Form.value.correct+""); 
    this.options[this.correctIndex-1].correct = true;
    const options = this.options;

    const body = {
      questionText,
      options,
    };

    return body;
  }

}
