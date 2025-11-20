import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public shopRegisterNo: string = '';
  public password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const isLoggedIn = this.auth.isLoggedIn();
    if (isLoggedIn) {
      console.log('logged in with session id');
      this.router.navigate(['/admin/barber']);
    }
  }

  // Login Submission 
  onSubmit() {
    if (this.auth.login(this.shopRegisterNo, this.password)) {
      this.router.navigate(['/admin/barber']);
    } else {
      alert('Wrong Password or username. Please recheck and login');
    }
  }

  //resetting Password
  resetPassword() {
    this.router.navigate(['/auth/password-recovery']);
  }
}
