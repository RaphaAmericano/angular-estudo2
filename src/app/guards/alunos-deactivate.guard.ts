import { IFormCanDeactivate } from './form-candiactivate';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Guarda de desativação');


        return component.podeDesativar();
    }
}
