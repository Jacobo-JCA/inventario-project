import { Injectable } from '@angular/core';
import { User } from './../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    // Realiza la lógica de autenticación con la API o servicio correspondiente
    // Puedes comparar el email y la contraseña ingresados con los datos almacenados en tu sistema

    // Ejemplo de verificación básica:
    const user: User = {
      id: 1,
      email: 'jc@gmail.com',
      password: 'admin'
    };

    if (email === user.email && password === user.password) {
      localStorage.setItem('id', user.id.toString());
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('id');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('id') !== null;
  }
}
