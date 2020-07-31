import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

    objeto: any = {
      nome: null,
      tempoExecucao: null,
      alcance: null,
      duracao: null,
      custo: null,
      descricao: null
    }

  ngOnInit() {}

    onSubmit(f) {
    const url = 'http://localhost:4200/api/habilidade/add';

    //method teste
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", url, true);

      xmlhttp.setRequestHeader("Content-Type", "application/json");

      xmlhttp.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Requisição finalizada. Faça o processamento aqui.
          console.log(this.response);
        }
      }
      xmlhttp.send(JSON.stringify(this.objeto));
  }
}
