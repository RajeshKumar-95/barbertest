import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {

  constructor() { }

  ngOnInit(): void {
  }

  public BarberList:string[] = [
    'Barber 1',
    'Barber 2',
    'Barber 3'
  ]

  public serviceList:string[] = [
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

  public timeList:string[] = [
    '15 mins',
    '30 mins',
    '45 mins',
    '1 Hr'
  ]



  onSubmit(form:any) {
    console.log('Onsubmit is working');
  console.log(form);
  }
}




