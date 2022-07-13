import { Component, Input } from '@angular/core';

@Component({
  selector: 'apiTable',
  template: './api_table.component.html',
  styles: [ './api_table.component.css' ]
})
export class ApiTableComponent  {
  @Input() name: string;
}
