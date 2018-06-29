import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authService: AuthServiceService,
    private router: Router
    ) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
