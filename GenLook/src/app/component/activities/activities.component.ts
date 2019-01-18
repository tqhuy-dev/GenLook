import { Component, OnInit , Input } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  @Input() activities: Activities = {
    _id: '',
    name : '',
    salePrice: '',
    mainPrice: '',
    status: '',
    rateStart: 0,
    city: '',
    time: {
      open: '',
      close: ''
    },
    booking: '',
    description: '',
    image: ''
  };
  constructor() { }

  ngOnInit() {
  }

  addToCart() {
  }
}
