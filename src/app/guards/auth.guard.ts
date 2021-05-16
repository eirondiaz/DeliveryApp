import { UserService } from './../dashboard/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(route);
  }
  
  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    if (!localStorage.getItem('token') && route.data.role !== 'AUTH') {
      this.router.navigate(['/auth/login'])
      return false
    }

    if (localStorage.getItem('token') && route.data.role === 'AUTH') {
      this.router.navigate(['/dashboard/home'])
      return false
    }

    //console.log(route.data.role)
    this.userService.getCurrentUser().subscribe(
      res => {
        console.log(res)
        if (res.data.role === 'ADMIN_ROLE' && res.data.role !== route.data.role) {
          this.router.navigate(['/admin/home'])
        }
        else if (res.data.role === 'USER_ROLE' && res.data.role !== route.data.role){
          this.router.navigate(['/dashboard/home'])
        }
      }, error => console.log(error)
    )

    return true
  }
}
