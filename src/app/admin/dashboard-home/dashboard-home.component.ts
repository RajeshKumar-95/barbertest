import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    public barberList: string[] = [
    'Barber 1',
    'Barber 2',
    'Barber 3'
  ]

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

  editBarber () {

  }

  deleteBarber () {
    
  }
}
