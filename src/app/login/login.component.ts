import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    form:FormGroup;

    constructor(
                private fb:FormBuilder,
                private authService: ApiService,
                private router: Router
                 ) {
        this.logado();
        this.form = this.fb.group({
            "login" : ['',Validators.required],
            "senha" : ['',Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.login && val.senha) {
            this.authService.login(val.login, val.senha);
            this.authService.verifyLogin();
            this.router.navigate(['/dataForm']);
        }
    }

    logado() {
        if(localStorage.getItem('token') != null) {
            this.router.navigate(['/dataForm']);
        }
    }
}
