import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc,deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Pregunta from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http : HttpClient,private firestore: Firestore) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }

  getQuestionFire(){
    const aCollection = collection(this.firestore, 'preguntas4c');
    return collectionData(aCollection,  { idField: 'id' }) as Observable<Pregunta[]>;
  }

  addQuestion(pregunta: any){
    const aDoc = collection(this.firestore, 'preguntas4c')
    return addDoc(aDoc,pregunta);
  }

  deleteQuestion(pregunta: Pregunta){
    const dDoc = doc(this.firestore, 'preguntas4c/'+pregunta.id);
    return deleteDoc(dDoc);
  }

  updateQuestion(pregunta: any) {
    const dDoc = doc(this.firestore, 'preguntas4c/' + pregunta.id);
    return updateDoc(dDoc, pregunta);
  }

}
