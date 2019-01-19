import { Component, OnInit , Input, Inject, LOCALE_ID } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';
import { ActivitiesService } from 'src/app/Main/services/activities.service';
import { WebStorageService } from 'angular-webstorage-service';

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
  constructor(
    private activitiesService: ActivitiesService,
    @Inject(LOCALE_ID) private webStorage: WebStorageService) { }

  ngOnInit() {
  }
}
