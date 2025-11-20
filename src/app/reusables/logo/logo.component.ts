import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  @Input() width: string = '210px';
  @Input() height: string = '100px';
  @Input() flex: string = 'column';
  @Input() text: string = 'BARBER SHOP';
  @Input() fontSize: string = '30px';
  @Input() color: string = 'white';
  @Input() margin:string = '';

}
