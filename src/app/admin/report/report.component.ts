import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

     public barberList: string[] = [
    'Barber 1',
    'Barber 2',
    'Barber 3'
  ]

  DashBoardHome () {
    this.route.navigate(['/admin/dashboard']);
  }
}
