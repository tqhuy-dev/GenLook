import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentServices {

  birthDay = '';
  @Output() change: EventEmitter<string> = new EventEmitter();
  constructor() { }

  selectDateData(date: string) {
    this.birthDay = date;
    this.change.emit(this.birthDay);
  }
}
