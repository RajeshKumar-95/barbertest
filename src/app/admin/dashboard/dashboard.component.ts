import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  @ViewChild('barberModal') barberModal: any;
  @ViewChild('serviceModal') serviceModal: any;
  public admin: string = 'Loga';

  adminLogout () {
    const logOut = this.auth.logout();
    const isAuth = this.auth.isLoggedIn();
    if (!isAuth) {
      this.route.navigate(['/auth/login']);
    }
  }

    public serviceList: string[] = [
    'Cut & Styling',
    'Luxury Shave & Beard Spa',
    'Beard Shave',
    'Smoothening',
    'Hair Straightening',
    'Head Massage',
    'Hair Coloring',
    'Face Wash',
    'Shampoo Conditioning'
  ]

  barberForm() {
    if (this.barberModal && this.barberModal.nativeElement) {
      this.barberModal.nativeElement.style.display = 'flex';
    }
  }

  serviceForm() {
    if (this.serviceModal && this.serviceModal.nativeElement) {
      this.serviceModal.nativeElement.style.display = 'flex';
    }
  }


  closeModal(id: string) {
    if (id === 'barberModal') {
      if (this.barberModal && this.barberModal.nativeElement) {
        this.barberModal.nativeElement.style.display = 'none';
        this.barberModal.form.reset();
      }
    } else if (id === 'serviceModal') {
      if (this.serviceModal && this.serviceModal.nativeElement) {
        this.serviceModal.nativeElement.style.display = 'none';
      }
    }
  }

  report () {
    this.route.navigate(['/admin/dashboard/reports']);
  }

}
