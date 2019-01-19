import { Injectable, Inject } from '@angular/core';
import { Activities } from 'src/app/interface/activities.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantValue } from 'src/app/common/constant.common';
import { ApiLink } from 'src/app/common/api-constant.common';
import { ResponseReturn } from 'src/app/interface/response.interface';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private _activities: BehaviorSubject<Activities[]> = new BehaviorSubject([]);
  get activities() {
    return this._activities.asObservable();
  }
  constructor(
    private httpClient: HttpClient,
    @Inject(LOCAL_STORAGE) private webStorage: WebStorageService) { }

  getDataActivities(nameCity: String) {
    console.log('================', this.webStorage.get('uuid'));
    this.httpClient.get(ConstantValue.BASE_URL_API + ApiLink.API_GET_CITY_DETAIL + nameCity + '/' + this.webStorage.get('uuid'))
    .subscribe((response: ResponseReturn) => {
      const data = response.data.activities.map((element) => {
        const activitiesItem: Activities = {
          _id: element._id,
          name: element.name,
          mainPrice: element.mainPrice,
          salePrice: element.salePrice,
          status: element.status,
          rateStart: element.rateStart,
          city: element.city,
          time: {
            open: element.time.open,
            close: element.time.close
          },
          booking: element.booking,
          description: element.description,
          image: element.image
        };
        return activitiesItem;
      });
      this._activities.next(data);
    });
  }
}
