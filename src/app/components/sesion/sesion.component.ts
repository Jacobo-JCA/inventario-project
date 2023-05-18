import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { User } from './../../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    const isAuthenticated = this.authService.login(this.email, this.password);

    if (isAuthenticated) {
      console.log('Inicio de sesión exitoso');
      const user: User = {
        id: 1,
        name: 'John Doe',
        email: this.email,
        password: this.password
      };
      this.router.navigate(['/administrar']);
      // Redirigir al usuario a la página de administración u otra página deseada
    } else {
      console.log('Credenciales inválidas');
    }
  }
}
