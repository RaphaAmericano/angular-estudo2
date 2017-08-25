import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
   
   private alunos: any = [];

  constructor( private alunoService: AlunosService) { }

  ngOnInit() {
  	this.alunos = this.alunoService.getAlunos();
  }

}