import { NgModule } from '@angular/core';
import {  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const AppRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'cursos', component: CursosComponent },
	{ path: 'curso/:id', component: CursoDetalheComponent },
	{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)], // Pode colocar os objetos dentro do parenteses ao inves de declarar a constante, no caso "AppRoutes"
	exports: [RouterModule]
})

export class AppRoutingModule {}