import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isUuid = localStorage.getItem('uuid');
        if (isUuid !== null ) {
            return false;
        } else {
            return true;
        }

    }
}
