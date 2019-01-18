import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  activities: Activities[] = [];
  constructor() { }

  ngOnInit() {
  }

}
