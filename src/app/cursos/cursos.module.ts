import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
//Componentes
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
//Modulos
import { CursosRoutingModule } from './cursos.routing.module';
//Servicos
import { CursosService } from './cursos.service';

@NgModule({
	imports:[
		CommonModule,
		//RouterModule,
		CursosRoutingModule
	],
	exports:[],
	declarations:[
		CursosComponent,
		CursoDetalheComponent,
		CursoNaoEncontradoComponent
		],
	providers:[CursosService],
})

export class CursosModule {}