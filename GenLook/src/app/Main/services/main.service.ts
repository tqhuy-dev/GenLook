import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantValue } from '../common/constant.common';
import { ApiLink } from '../common/api-constant.common';
import { City } from 'src/app/interface/city.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _cities: BehaviorSubject<City[]> = new BehaviorSubject([]);

  get listCity() {
   return this._cities.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  getLocation() {
    return this.httpClient.get(ConstantValue.BASE_URL_API + ApiLink.API_GET_POPULAR_CITY
      + ConstantValue.API_ACCESS_KEY_DEV)
      .subscribe((data: any) => {
        this._cities.next(data.data);
        console.log(data.data);
      });
  }
}
