import { Component, OnInit , Input, Inject, LOCALE_ID } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';
import { ActivitiesService } from 'src/app/Main/services/activities.service';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  inCart: String = 'Available On Cart';
  outCart: String = 'Available';
  inPaying: String = 'Available On Paying';
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
  constructor(
    private activitiesService: ActivitiesService,
    @Inject(LOCAL_STORAGE) private webStorage: WebStorageService) { }

  ngOnInit() {
  }

  addToCart() {
    console.log('======',  this.webStorage.get('uuid'));
    this.activitiesService.addActivitiesIntoCart(this.activities._id , this.webStorage.get('uuid') ,
    (result) => {
      if (true) {
        this.activities.status += ' On Cart';
      } else {
        alert('false');
      }
    });
  }
}
