import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private api: ApiService) {}

  objeto: any = {
    nome: null,
    preco: null,
    peso: null
  }

  item: any = [];

  cadastrar(f){
    console.log(f)
    console.log(f.value)
    console.log(this.objeto)
    // /api/item/add
  }

  getItem() {
    this.api.getItem()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.item.push({
            nome: d.nome,
            preco: d.preco,
            peso: d.peso
          });
        }
        console.log(this.item);
      });
  }

  // constructor() { }

  ngOnInit() {
  }


}
