import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const localUrl = 'assets/data/item.json';
// const localUrl = 'https://gitlab.com/KienKse/sandbox/-/raw/master/monstro.json';
// /home/icarosilva/Documentos/workspace/roleplaying-front/src/data/item.json

const BASE_URL = 'http://localhost:4200/api/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  enviarHabilidade(habilidade) {
    this.enviar(habilidade, 'habilidade/add');
  }

  enviarItem(item) {
    this.enviar(item, 'item/add');
  }

  enviar(obj, compĺement) {
    var url =  BASE_URL + compĺement;

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
      xmlhttp.send(JSON.stringify(obj));
  }

}