//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    // private http: HttpClient
    ) { }

  ngOnInit() {
// Primeira forma
/*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      tempoExecucao: new FormControl(null),
      alcance: new FormControl(null),
      efeito: new FormControl(null),
      duracao: new FormControl(null),
      custo: new FormControl(null),
      descricao: new FormControl(null)
    });
*/

// Segunda forma
    this.formulario = this.formBuilder.group({
      nome: [null],
      tempoExecucao: [null],
      alcance: [null],
      duracao: [null],
      custo: [null],
      descricao: [null]
    });
  }

  onSubmit() {
    /*
    console.log(this.formulario.value);
    this.http.post('localhost:8081/api/habilidade/add',
                  JSON.stringify(this.formulario.value))
      .subscribe(dados => console.log(dados));
      */
  }

}
