import { Component, OnInit, Input, Inject } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';
import { ActivitiesService } from 'src/app/Main/services/activities.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  @Input() City: String = '';
  activities: Activities[] = [];
  constructor(
    private activitiesService: ActivitiesService,
    @Inject(LOCAL_STORAGE) private webStorage: WebStorageService ) { }

  ngOnInit() {
    this.activitiesService.activities.subscribe((data) => {
      this.activities = data;
    });
    this.activitiesService.getDataActivities(this.City);
  }
}
