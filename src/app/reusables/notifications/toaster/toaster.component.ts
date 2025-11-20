import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  progressWidth: number = 100;
  public message: string = ' Login is for admin Only!';
  public type:{info:'success',color:'green'}|{info:'error',color:'#d20101'}|{info:'info',color:' #ffc107'} = {info:'success',color:'green'};
  public duration:number = 4000;
  public value:number = 100;
  public max:number = 100;

  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    const steps = 100;
    const stepTime = this.duration / steps;
    const stepSize = this.max / steps;
  
    this.intervalId = setInterval(() => {
      if (this.value > 0) {
        this.value -= stepSize;
      } else {
        this.value = 0;
        clearInterval(this.intervalId);
      }
    }, stepTime);

}
  }

