import { Component, OnInit, Input } from '@angular/core';
import { YearEvent } from 'src/app/interface/yearEven.interface';

@Component({
  selector: 'app-year-event-item',
  templateUrl: './year-event-item.component.html',
  styleUrls: ['./year-event-item.component.scss']
})
export class YearEventItemComponent implements OnInit {

  @Input() event: YearEvent = {
    _id: '',
    name: '',
    rateStart: 0,
    salePrice: 0,
    mainPrice: 0,
    status: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
