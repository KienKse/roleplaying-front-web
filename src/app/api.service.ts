import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from 'src/item';
import { Router } from '@angular/router';

const localUrl = 'assets/data/item.json';

const BASE_URL = 'http://localhost:4200/api/'
const BASE = 'http://localhost:4200'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getItens(): Observable<Item[]> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.httpClient.get<Item[]>(BASE_URL + 'item/', { headers: reqHeader })
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  login(login:string, senha:string ) {
    if(this.token == '' || this.token == null) {
      console.log("Login method");
      var user = { "login" : login, "senha": senha };
      this.token = this.httpClient.post(`http://localhost:8081/login/auth`, user)
                .subscribe(
                  resultado => {
                    this.token = resultado;
                    console.log(resultado);
                    // sessionStorage.
                    localStorage.setItem("token",this.token.token);
                    localStorage.setItem("login",login);
                    location.reload();
                  },
                  erro => {
                    if(erro.status == 400) {
                      console.log(erro);
                    } else {
                      console.log("Inesperado");
                      console.log(erro);
                    }
                  }
                );
    } else {
      console.log(localStorage.getItem('token'));
    }
  }

  verifyLogin() {
    if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
    }
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

      if (localStorage.getItem('token')) {
        xmlhttp.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
      }

      xmlhttp.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Requisição finalizada. Faça o processamento aqui.
          console.log(this.response);
        }
      }
      xmlhttp.send(JSON.stringify(obj));
  }

  // getServerList(){
  //   var reqHeader = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('mpManagerToken'))
  //   });
  //   return this.http.get<Server[]>(`${environment.apiUrl}/api/Servers/GetServerList`, { headers: reqHeader });
  // }



  handleError(handleError: any): import("rxjs").OperatorFunction<Item[], any> {
    throw new Error('Operação não realizada');
  }

  logout() {
      localStorage.removeItem("token");
  }

}