import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private data: UserService) {
    this.getCurrentUser()
  }

  ngOnInit(): void {
  }

  logout() {
    Swal.fire({
      icon: 'question',
      title: 'Cerrar sesión',
      text: 'Seguro que desea cerrar sesión?',
      showConfirmButton: true,
      confirmButtonColor: '#fa5830 '
    }).then(x => {
      if (x.isConfirmed) {        
        localStorage.removeItem('token')
        this.router.navigate(['/auth/login'])
      }
    })
  }

  userData: User = {}
  getCurrentUser() {
    this.data.getCurrentUser().subscribe(
      res => {
        this.userData = res.data
      }
    )
  }
}
