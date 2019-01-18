import { Component, OnInit, Input } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';
import { ActivitiesService } from 'src/app/Main/services/activities.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  @Input() City: String = '';
  activities: Activities[] = [];
  constructor(private activitiesService: ActivitiesService ) { }

  ngOnInit() {
    this.activitiesService.activities.subscribe((data) => {
      this.activities = data;
    });
    this.activitiesService.getDataActivities(this.City);
  }

}
