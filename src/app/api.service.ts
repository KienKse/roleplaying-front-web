import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const localUrl = 'assets/data/item.json';
// const localUrl = 'https://gitlab.com/KienKse/sandbox/-/raw/master/monstro.json';
// /home/icarosilva/Documentos/workspace/roleplaying-front/src/data/item.json

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get(localUrl);
  }

  //TODO
  // https://www.djamware.com/post/5d8d7fc10daa6c77eed3b2f2/angular-8-tutorial-rest-api-and-httpclient-examples
  // OBJECT ITEM +
  // POST
}