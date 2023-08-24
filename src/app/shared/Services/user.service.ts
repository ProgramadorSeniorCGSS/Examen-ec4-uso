import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _login:Boolean = false;
  constructor(private auth: Auth) { }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);  
  }

  logout(){
    return this.auth.signOut();
  }

  isAuthenticated(){
    return this._login;
  }
}
