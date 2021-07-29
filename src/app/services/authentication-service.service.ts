import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  loginUser(credentials){
    return new Promise((resolve, reject) => {
      if(credentials.email === 'elpepe@test.com' && credentials.password === 'Test.1234') {
        resolve({status: 'Ok', code: 200, message: 'Login Existoso'});
      } else {
        reject({status: 'Error', code: 500, message: 'Error en la contraseña u/o correo'});
      }
    });
  }

  registerUser(credentials){
    return new Promise ((resolve, reject) => {
      if(credentials) {
        resolve({status: 'Ok', code: 200, message: 'Registro Existoso'});
      } else {
        reject({status: 'Error', code: 500, message: 'Error Intente mas tarde'});
      }
    });
  }
}
