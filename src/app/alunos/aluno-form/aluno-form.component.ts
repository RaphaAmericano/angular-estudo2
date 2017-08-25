import { IFormCanDeactivate } from './../../guards/form-candiactivate';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean  = false;
  constructor( private route: ActivatedRoute, private alunosService: AlunosService) { }

  ngOnInit() {
  	this.inscricao = this.route.params.subscribe(
  		(params:any)=> {
  			let id = params['id'];
  			this.aluno = this.alunosService.getAluno(id);

  			if ( this.aluno === null ){
  				this.aluno = {};
  			}
  		});
  }
  ngOnDestroy(){
  	this.inscricao.unsubscribe();
  }
  onInput(){
    this.formMudou = true;
  }
  podeMudarRota(){
    if (this.formMudou){
      confirm('Tem cereteza que deseja sair');
    }
    return true;
  }
  podeDesativar(){
    return this.podeMudarRota();
  }
}
