import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  constructor(private api: ApiService) {
    this.api.verifyLogin();
  }

    objeto: any = {
      nome: null,
      tempoExecucao: null,
      alcance: null,
      duracao: null,
      custo: null,
      descricao: null,
      user: null
    }

  ngOnInit() {}



  onSubmit(f) {
    this.objeto.user = localStorage.getItem("login");
    this.api.enviarHabilidade(this.objeto);
    location.reload();
  }

  clearFields() {
    this.objeto.nome = "",
    this.objeto.tempoExecucao = "",
    this.objeto.alcance = "",
    this.objeto.duracao = "",
    this.objeto.custo = "",
    this.objeto.descricao = "";
  }

}
