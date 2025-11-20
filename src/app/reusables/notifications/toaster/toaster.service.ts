import { Injectable } from '@angular/core';
import { ToasterComponent } from './toaster.component';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  public message: string = '';
  public type:{info:'success',color:'green'}|{info:'error',color:'#d20101'}|{info:'info',color:' #FDE127'} = {info:'info',color:' #FDE127'};
}
