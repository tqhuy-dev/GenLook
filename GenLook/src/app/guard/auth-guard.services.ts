import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const isUuid = localStorage.getItem('uuid');
        if (isUuid !== null ) {
            this.router.navigate(['/home']);
            return false;
        } else {
            return true;
        }

    }
}
