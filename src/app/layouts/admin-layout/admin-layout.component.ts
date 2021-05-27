import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild('sidebar', { static: false }) sidebar: ElementRef
  @ViewChild('btn', { static: false }) btn: ElementRef

  sidebarActive

  constructor(public breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          setTimeout(() => {
            this.sidebar.nativeElement.className = 'sidebar'
            this.hideSidebar()
          }, 100)
          this.sidebarActive = false
          this.open = false
        } else {
          setTimeout(() => {
            this.sidebar.nativeElement.className = 'sidebar active'
          }, 100)
          this.mini = true
          this.open = true
          this.sidebarActive = true
        }
      });
  }

  open: boolean = true
  toggleSidebar() {
    if (this.sidebarActive) {
      console.log(this.open)
      if (this.open) {
        this.sidebar.nativeElement.className = 'sidebar'
        this.open = false
      }else {
        this.sidebar.nativeElement.className = 'sidebar active'
        this.open = true
      }
      //console.log('object')
      //this.open? this.sidebar.nativeElement.className = 'sidebar': this.sidebar.nativeElement.className = 'sidebar active' 
    }
  }

  logOut() {
    Swal.fire({
      icon: 'question',
      title: 'Cerrar sesión',
      text: 'Seguro que desea cerrar sesión?',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#fa5830',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor:'gray'
    }).then(x => {      
      if (x.isConfirmed) {
        localStorage.removeItem('token')
        this.router.navigate(['/auth/login'])
      }
    })
  }

  mini = true
  hideSidebar() {
    this.mini = false
    this.sidebar.nativeElement.className = 'sidebar hide'
  }

  showMiniside() {
    this.mini = true
    this.sidebar.nativeElement.className = 'sidebar'
  }

}
