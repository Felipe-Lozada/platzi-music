import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validationMessage = {
    email:[
      {type:'required', message: 'El email es requerido'},
      {type: 'pattern', message: 'Ojo! este no es un email válido'}
    ],
    password:[
      {type:'required', message: 'El password es requerido'},
      {type: 'minlength', message: 'Minimo 5 letras para el password'}
    ]
  };

  errorMessage = '';

  constructor(private formBuider: FormBuilder) {
    this.loginForm = this.formBuider.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  }

  ngOnInit() {
  }

  loginUser(credentials){}

}
