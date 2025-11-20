import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
@ViewChild('otpModal') otpModal:any
  constructor() { }

  ngOnInit(): void {
  }

  barberForm() {
    if (this.otpModal && this.otpModal.nativeElement) {
      this.otpModal.nativeElement.style.display = 'flex';
    }
  }

  closeModal(id: string) {
    if (id === 'otpModal') {
      if (this.otpModal && this.otpModal.nativeElement) {
        this.otpModal.nativeElement.style.display = 'none';
        this.otpModal.form.reset();
      }
  }
}
}
