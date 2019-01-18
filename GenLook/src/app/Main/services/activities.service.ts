import { Injectable } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantValue } from 'src/app/common/constant.common';
import { ApiLink } from 'src/app/common/api-constant.common';
import { ResponseReturn } from 'src/app/interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private _activities: BehaviorSubject<Activities[]> = new BehaviorSubject([]);
  get activities() {
    return this._activities.asObservable();
  }
  constructor(private httpClient: HttpClient) { }

  getDataActivities(nameCity: String) {
    this.httpClient.get(ConstantValue.BASE_URL_API + ApiLink.API_GET_CITY_DETAIL + nameCity + ConstantValue.API_ACCESS_KEY_DEV)
    .subscribe((response: ResponseReturn) => {
      const data = response.data.activities.map((element) => {
        // let activitiesItem: Activities = {
        //   _id: element._id,
        //   name: element.name,
        //   main
        // };
      });
    });
  }
}
