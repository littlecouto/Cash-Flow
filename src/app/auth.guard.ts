import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LocalService } from "./local.service";

@Injectable()
export class AuthGuard extends LocalService implements CanActivate {

    constructor(private router: Router) {
      super();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (this.getItem('user')) {
            return true;
        } else {
            this.router.navigate(['/entrar']);
        }

    }

}
