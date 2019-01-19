import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Main/services/main.service';
import { City } from 'src/app/interface/city.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss']
})
export class ListLocationComponent implements OnInit {

  cities: City[] = [];
  constructor(private mainService: MainService,
    private router: Router) {}

  ngOnInit() {
    this.mainService.listCity.subscribe((data) => {
      this.cities = data;
      console.log(this.cities);
    } , (error) => {
      console.log('error');
    } , () => {
      console.log('completed');
    });
    this.mainService.getLocation();
  }

  getCities() {
    this.mainService.listCity.subscribe((data) => {
      this.cities = data;
      console.log(this.cities);
    } , (error) => {
      console.log('error');
    } , () => {
      console.log('completed');
    });
    this.mainService.getLocation();
  }

  seeDetailCity(city: City) {
    console.log(city.name);
    this.router.navigate(['/home/city/' + city.name]);
  }
}
