import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  validation_messages = [
  {
    email: [
      {
        type: 'required',
        message: 'Este campo es requerido'
      },
      {
        type: 'pattern',
        message: 'Este no es un correo valido'
      }
    ],
    password: [
      {
        type: 'required',
        message: 'Este campo es requerido'
      },
      {
        type: 'minLength',
        message: 'Minimo 8 caracteres'
      }
    ]
  }
];

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
