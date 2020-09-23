import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  login: string;

  constructor() {
    this.login = localStorage.getItem("login");
  }
  title = 'roleplaying-front';
}
