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

//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';


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
    CursosModule,
    AppRoutingModule
    //routing
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
