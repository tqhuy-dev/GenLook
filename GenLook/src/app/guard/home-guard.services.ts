import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class HomePaigeGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const uuid = localStorage.getItem('uuid');
        if (uuid !== null) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
