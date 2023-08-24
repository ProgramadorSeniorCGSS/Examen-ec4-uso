import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-edit-p',
  templateUrl: './modal-edit-p.component.html',
  styleUrls: ['./modal-edit-p.component.scss']
})
export class ModalEditPComponent {

  @Input() pregunta:any;

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

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal,private service: PreguntasService) {
    
  }
  ngOnInit() {
    console.log(this.pregunta)
    if (this.pregunta) {
      //recorremos las opciones para saber cual es la correcta
      this.options = this.pregunta.options;
      this.options.forEach( (op,i) => {
        if(op.correct){
          this.correctIndex = i+1;
        }
      });
      console.log(this.correctIndex);
      console.log(this.pregunta.id);
      this.Form.patchValue({
        questionText: this.pregunta.questionText,
        option1: this.pregunta.options[0]?.text || '',
        option2: this.pregunta.options[1]?.text || '',
        option3: this.pregunta.options[2]?.text || '',
        option4: this.pregunta.options[3]?.text || '',
        correct: this.correctIndex || 1
      });
    }
  }

  editar(){



    Swal.fire({
      title: 'Quieres actualizar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.updateQuestion(this.procesarFormulario())
        .then(response => {
          Swal.fire('Actualizado con exito', '', 'success');
        }).catch(
          error => {
            Swal.fire('Error al actualizar', 'Intente de nuevo', 'error');
          }
        );
      this.activeModal.close();
      } 
    });
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
    const id = this.pregunta.id;
    const body = {
      id,
      questionText,
      options,
    };
    

    return body;
  }

  eliminar(){

    Swal.fire({
      title: 'Quieres eliminar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.deleteQuestion(this.pregunta)
        .then(response => {
          Swal.fire('Eliminado con exito', '', 'success');
        }).catch(
          error => {
            Swal.fire('Error al eliminar', '', 'error');
          }
        );
      this.activeModal.close();
      } 
    });

    

  }


}
