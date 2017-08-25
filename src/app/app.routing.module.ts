import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { NgModule } from '@angular/core';
import {  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const AppRoutes: Routes = [
  { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',
                    canActivate: [AuthGuard],
                    canActivateChild: [CursosGuard]
                  }, //Rota só pode ser carregada em um local da aplicação
  { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
                    canActivate: [AuthGuard],
                    //canActivateChild: [AlunosGuard]
                    },
	{ path: 'login', component: LoginComponent },
	//{ path: 'cursos', component: CursosComponent },
	//{ path: 'curso/:id', component: CursoDetalheComponent },
	//{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent,
              canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)], // Pode colocar os objetos dentro do parenteses ao inves de declarar a constante, no caso "AppRoutes"
	exports: [RouterModule]
})

export class AppRoutingModule {}
