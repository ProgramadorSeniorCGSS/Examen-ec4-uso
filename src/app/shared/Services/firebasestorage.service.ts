import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { ref,uploadBytes, listAll,getDownloadURL } from 'firebase/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  constructor(private storage: Storage) {}

  upload4cPDF(file: File){

    //const filePath = `pdfs/${file.name}`;
    const fileRef = ref(this.storage,`manual4c/manual4cUSO.pdf`);
    //const task = this.storage.upload(filePath, file);

    return uploadBytes(fileRef,file);
  }

  get4cPDFDownloadURL() {
    const fileRef = ref(this.storage,`manual4c/manual4cUSO.pdf`);
    return getDownloadURL(fileRef);
  }
}

