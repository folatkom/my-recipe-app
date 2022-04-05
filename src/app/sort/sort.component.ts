import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Output() sortBy = new EventEmitter<string>();
  show: boolean = false;
  showHide() {
    this.show = !this.show;
  }
}
