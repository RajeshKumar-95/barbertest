import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.scss']
})
export class ActionsButtonsComponent implements OnInit {

  @Output() public editActive:EventEmitter<boolean> = new EventEmitter;
  @Output() public deleteActive:EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  canEdit() {
    this.editActive.emit(true);
  }

  canDelete() {
    this.editActive.emit(true);
  }
}
