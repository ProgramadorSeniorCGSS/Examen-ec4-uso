import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importa NgbModule
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

//material
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { Test4Component } from './public/test4/test4.component';
import { PrincipalComponent } from './public/principal/principal.component';
import { Preguntast4Component } from './public/preguntast4/preguntast4.component';
import { PreguntasService } from './shared/Services/preguntas.service';
import { ChangeBgDirective } from './change-bg.directive';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//firebase
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListaPreguntasComponent } from './public/lista-preguntas/lista-preguntas.component';
import { LoginComponent } from './private/login/login.component';
import { AdminComponent } from './private/admin/admin.component';
import { UserService } from './shared/Services/user.service';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ModalAddPComponent } from './private/admin/containers/modal-add-p/modal-add-p.component';
import { ModalEditPComponent } from './private/admin/containers/modal-edit-p/modal-edit-p.component';
import { DescargasComponent } from './public/descargas/descargas.component';
import { IndicacionesComponent } from './public/indicaciones/indicaciones.component';
import { AcercadeComponent } from './public/acercade/acercade.component';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    Test4Component,
    PrincipalComponent,
    Preguntast4Component,
    ListaPreguntasComponent,
    ChangeBgDirective,
    LoginComponent,
    AdminComponent,
    ModalAddPComponent, 
    ModalAddPComponent, ModalEditPComponent, DescargasComponent, IndicacionesComponent, AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    NgbDropdownModule,
    MatButtonModule, MatMenuModule, MatInputModule,MatFormFieldModule,
    MatCardModule, MatSelectModule, MatRadioModule, MatProgressBarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideFirestore(() => getFirestore()),
    provideAuth(()=> getAuth()),
    provideStorage(() => getStorage())
  ],
  providers: [PreguntasService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
