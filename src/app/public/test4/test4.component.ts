import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component {

  @ViewChild('name') nameKey!: ElementRef;

  nameForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  startQuiz(){
    if (this.nameForm.valid) {
      localStorage.setItem("name",this.nameKey.nativeElement.value);
      this.router.navigate(['principal/test4/examen4']);
    }
    //localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
