import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Main/services/main.service';
import { City } from 'src/app/interface/city.interface';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss']
})
export class ListLocationComponent implements OnInit {

  cities: City[] = [];
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.getCities2();
  }

  getCities2() {
    this.mainService.listCity.subscribe((data) => {
      this.cities = data;
    } , (error) => {
      console.log('error');
    } , () => {
      console.log('completed');
    });
    this.mainService.getLocation();
  }
}
