import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nameForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  start() {
    if (this.nameForm.valid) {
      this.userService.login(this.nameForm.value)
        .then(response => {
          this.userService._login = true;
          this.router.navigate(['admin']);
        }).catch(
          error => {
            Swal.fire('Login Admin', 'Credenciales incorrectas', 'error');
          }
        );
    }
    //localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

  back() {
    this.router.navigate(['principal']);
    //localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
