import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent {
  @Output() browser = new EventEmitter<string>();
  value: string = '';
}
