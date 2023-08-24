import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddPComponent } from './containers/modal-add-p/modal-add-p.component';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';
import { ModalEditPComponent } from './containers/modal-edit-p/modal-edit-p.component';
import Pregunta from 'src/app/shared/interfaces/pregunta.interface';
import { FirebaseStorageService } from 'src/app/shared/Services/firebasestorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  items$: Observable<Pregunta[]>;
  selectedFile4c: File | null = null;
  subiendo4c: number | null = null;
  urlActual4c: string = "";

  selectedFile3c: File | null = null;
  subiendo3c: number | null = null;

  constructor(private modalService: NgbModal,private service: PreguntasService, private storage: FirebaseStorageService) {
    this.items$ = service.getQuestionFire();
    console.log(this.items$);
    this.descargarM4CPDF();
  }

	open() {
		const modalRef = this.modalService.open(ModalAddPComponent);
		//modalRef.componentInstance.name = 'World';
	}

  editar(item: any) {
    console.log(item)
		const modalRef = this.modalService.open(ModalEditPComponent);
		modalRef.componentInstance.pregunta = item;
	}


//SUBIR ARCHIVOS
onFileSelected4c(event: any) {
  this.selectedFile4c = event.target.files[0];
}

onFileSelected3c(event: any) {
  this.selectedFile3c = event.target.files[0];
}


onUpload4C() {
  if (this.selectedFile4c) {
    this.subiendo4c=1;
    this.storage.upload4cPDF(this.selectedFile4c)
    .then(response => {
      this.subiendo4c = null;
      this.selectedFile4c = null;
      Swal.fire('Subido con exito', '', 'success');
    }).catch(
      error => {
        Swal.fire('Error al subir', '', 'error');
      }
    );
  }
}

descargarM4CPDF(){
  this.storage.get4cPDFDownloadURL().then(response => {
    //Swal.fire('Agregado con exito', '', 'success');
    this.urlActual4c =response+"";
    console.log(response);
  }).catch(
    error => {
      Swal.fire('Error al caargar los archivos', '', 'error');
    }
  );
}

}
