import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup
  constructor(private dataService: AuthService,
    private formBluider: FormBuilder,
    private router: Router) {
    this.createForm()
  }
  
  createForm() {
    this.form = this.formBluider.group({
      user: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]*')]],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }

  signining = false
  emailRepeat = false
  createUser(form: any) {
    this.signining= true
    
    form = { ...form, role: 'USER_ROLE', status: true }
    
    this.dataService.createUser(form).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        console.log(res.token)
        this.router.navigate(['/dashboard/home'])
        this.signining = false
      },
      error => {
        console.log(error)
        this.signining = false
        this.emailRepeat = true
      }
    )
    
  }

  ngOnInit(): void {
  }

}
