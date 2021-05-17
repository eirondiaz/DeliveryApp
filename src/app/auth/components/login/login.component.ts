import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  constructor(private formBluider: FormBuilder, private dataService: AuthService, private router: Router) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.formBluider.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }
  
  logining = false
  notMatch = false
  notFound = false
  login(form: any) {
    this.logining = true
    this.dataService.login(form).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard/home'])
      },
      error => {
        console.log(error.error.msg)

        this.logining = false
        if (error.error.msg == 'user not found') {
          this.notFound = true          
        } else if (error.error.msg == 'pass not match') {
          
          this.notMatch = true
        }
      }
    )
  }

  

}
