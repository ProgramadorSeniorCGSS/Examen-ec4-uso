import { Component } from '@angular/core';
import { UserService } from './shared/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-elect-uso';

  constructor(private userService: UserService, private router: Router){

  }

  salir(){
    this.userService.logout();
    this.router.navigate(['principal']);
  }
}
