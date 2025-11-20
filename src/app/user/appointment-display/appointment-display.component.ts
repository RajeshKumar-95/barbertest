import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/core/models/appointment.model';

@Component({
  selector: 'app-appointment-display',
  templateUrl: './appointment-display.component.html',
  styleUrls: ['./appointment-display.component.scss']
})
export class AppointmentDisplayComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 public appointmentList: Appointment[] = [
    { slno: 1, name: 'Custmer name 01', barber: 'Barber 1', status: 'Progress' },
    { slno: 2, name: 'Custmer name 02', barber: 'Barber 2', status: 'Progress' },
    { slno: 3, name: 'Custmer name 03', barber: 'Barber 3', status: 'Progress' },
    { slno: 4, name: 'Custmer name 04', barber: 'Barber 1', status: 'Be Ready' },
    { slno: 5, name: 'Custmer name 05', barber: 'Barber 2', status: 'Be Ready' },
    { slno: 6, name: 'Custmer name 06', barber: 'Barber 2', status: 'Be Ready' },
    { slno: 7, name: 'Custmer name 07', barber: 'Barber 3', status: 'Be Ready' },
    { slno: 8, name: 'Custmer name 08', barber: 'Barber 1', status: 'Be Ready' }
  ];


  directTo(){
    this.router.navigate(['/user/book-appointment']);
  }
}
