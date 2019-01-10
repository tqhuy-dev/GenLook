import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantValue } from '../common/constant.common';
import { ApiLink } from '../common/api-constant.common';
import { City } from 'src/app/interface/city.interface';
import { BehaviorSubject } from 'rxjs';
import { GenServices } from 'src/app/interface/genServices.interface';
import { ResponseReturn } from 'src/app/interface/response.interface';
import { YearEvent } from 'src/app/interface/yearEven.interface';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _cities: BehaviorSubject<City[]> = new BehaviorSubject([]);
  private _services: BehaviorSubject<GenServices[]> = new BehaviorSubject([]);
  private _yearEvent: BehaviorSubject<YearEvent[]> = new BehaviorSubject([]);

  get yearEvent() {
    return this._yearEvent.asObservable();
  }

  get listCity() {
   return this._cities.asObservable();
  }

  get services() {
    return this._services.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  getLocation() {
    return this.httpClient.get(ConstantValue.BASE_URL_API + ApiLink.API_GET_POPULAR_CITY
      + ConstantValue.API_ACCESS_KEY_DEV)
      .subscribe((data: ResponseReturn) => {
        this._cities.next(data.data);
      }, (error) => {

      } , () => {
        this._cities.complete();
      });
  }

  getServices() {
    return this.httpClient.get('http://localhost:3000/api/v1/genlook/genServices')
    .subscribe((response: ResponseReturn) => {
      this._services.next(response.data);
    });
  }

  getYearEvent() {
    return this.httpClient.get('http://localhost:3000/api/v1/genlook/yearEven')
    .subscribe((response: any) => {
      this._yearEvent.next(response.data);
    });
  }
}
