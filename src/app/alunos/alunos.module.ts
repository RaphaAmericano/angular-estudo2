import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Componentes
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
//Modulo
import { AlunosRoutingModule } from './alunos.routing.module';
//Servico
import { AlunosService } from './alunos.service';
@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		AlunosRoutingModule
	],
	declarations:[
		AlunosComponent,
		AlunoFormComponent, 
		AlunoDetalheComponent
		],
	exports:[],
	providers:[AlunosService]
})
export class AlunosModule {}