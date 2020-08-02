import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from 'src/item';

const localUrl = 'assets/data/item.json';
// const localUrl = 'https://gitlab.com/KienKse/sandbox/-/raw/master/monstro.json';
// /home/icarosilva/Documentos/workspace/roleplaying-front/src/data/item.json

const BASE_URL = 'http://localhost:4200/api/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getItens(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(BASE_URL + 'item/')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

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


  handleError(handleError: any): import("rxjs").OperatorFunction<Item[], any> {
    throw new Error('Operação não realizada');
  }

}