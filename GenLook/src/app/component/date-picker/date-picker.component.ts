import { Component, OnInit, Output, Input } from '@angular/core';
import { ComponentServices } from '../component-services.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  birthDay = '';
  isToggle = false;
  constructor(private componentServices: ComponentServices) { }

  ngOnInit() {
  }

  selectDate(event: any) {
    const dateString = event.month + '-' + event.day + '-' + event.year;
    this.componentServices.selectDateData(dateString);
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }
}
