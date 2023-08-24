import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.scss']
})
export class ListaPreguntasComponent {

  items$: Observable<any[]>;
  
  constructor(private firestore: Firestore){
    const aCollection = collection(this.firestore, 'preguntas4c')
    this.items$ = collectionData(aCollection);
    console.log(this.items$)
  }
}
