import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild{
  	canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      console.log(route);

      //Exemplo de logica para permissoes
      if( state.url.includes('editar')){
        alert('Usuário sem acesso');
        //return false;
        return Observable.of(false);
      }

      return true;
    }
}
