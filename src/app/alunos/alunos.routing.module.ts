import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Componentes
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';


const alunosRoutes = [
	// {path: 'alunos', component: AlunosComponent},
	// {path: 'alunos/novo', component: AlunoFormComponent}, //Hard coded deve ser avaliado primeiro. Abaixo, são 'rotas dinamicas'
	// {path: 'alunos/:id', component: AlunoDetalheComponent},
	// {path: 'alunos/:id/editar', component: AlunoFormComponent},
	
	//Com rotas filhas:
	{path: '', component: AlunosComponent, children:[
		{path: 'novo', component: AlunoFormComponent}, //Hard coded deve ser avaliado primeiro. Abaixo, são 'rotas dinamicas'
		{path: ':id', component: AlunoDetalheComponent},
		{path: ':id/editar', component: AlunoFormComponent},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(alunosRoutes) ],
	exports: [RouterModule]
})

export class AlunosRoutingModule {}