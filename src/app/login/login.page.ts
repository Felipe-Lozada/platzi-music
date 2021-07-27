import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { ToastController } from '@ionic/angular';

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

  constructor(
      private formBuider: FormBuilder,
      private authService: AuthenticationServiceService,
      private toastCtrl: ToastController
    ) {
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

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      color,
      mode: 'ios',
      duration: 2000
    });
    toast.present();
  }

  loginUser(credentials){
    this.authService.loginUser(credentials)
      .then((res: any) => {
        console.table(res);
        this.presentToast(res.message, 'success');
      })
      .catch((error: any) => {
        console.table(error);
        this.presentToast(error.message, 'danger');
      });
  }

  goToRegister(){}

}
