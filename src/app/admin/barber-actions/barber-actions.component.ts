import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barber-actions',
  templateUrl: './barber-actions.component.html',
  styleUrls: ['./barber-actions.component.scss']
})
export class BarberActionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  userDirect(){
    this.router.navigate(['/user/all-appointments']);
  }

  adminDirect() {
    let password = prompt('Enter passowrd:');
    if(password === 'Friday@1234') {
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Wrong password.Please Try Again');
    }
  }
}
