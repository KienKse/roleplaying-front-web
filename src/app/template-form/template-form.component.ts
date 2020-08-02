import { Component, OnInit } from '@angular/core';
import { Item } from 'src/item';
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
    peso: null,
    lore: null,
  }

  itens: any = [];

  cadastrar(f) {
    console.log(this.objeto);
    if(f.valid) {
      console.log('submit');
      this.api.enviarItem(this.objeto);
      location.reload();
    }
  }

  getItem() {
    this.api.getItens().subscribe((itens: Item[]) => {
      this.itens = itens;
    });
   }

  ngOnInit() {
    this.getItem();
  }

}
