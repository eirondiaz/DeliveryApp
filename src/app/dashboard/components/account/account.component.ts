import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

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
}
