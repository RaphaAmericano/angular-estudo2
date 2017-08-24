import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor( private router: Router) { }
  fazerLogin(usuario: Usuario){
    if( usuario.nome === 'uduario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado =  true;
      this.mostrarMenuEmitter.emit(true);
      this.router(['/']);
    } else {
      this.usuarioAutenticado =  false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
