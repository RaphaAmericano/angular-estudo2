import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosService } from './cursos/cursos.service';
import { AuthService } from './login/auth.service';

//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

//Guards
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent/*,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,*/
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    //CursosModule, //modulo foi carregado no modulo de routing e só pode ser carregado lá para o caso de lazy loading
    //AlunosModule,
    AppRoutingModule
    //routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
    //,CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
