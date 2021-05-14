import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup
  constructor( private dataService: AuthService, private formBluider: FormBuilder,) { 

    this.createForm()
  }
  
  createForm() {
    this.form = this.formBluider.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }

  signining= false
  createUser(form: any) {
    this.signining= true
    
    form = { ...form, role: 'USER_ROLE', status: true }
    
    this.dataService.createUser(form).subscribe(
      res => {
        console.log(res)
        this.signining = false
        localStorage.setItem('token', res.token)
        console.log(res.token)
      }
    )
    
  }

  ngOnInit(): void {
  }

}
