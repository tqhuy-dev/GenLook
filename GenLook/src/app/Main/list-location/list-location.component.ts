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
    this.getCities();
  }

  getCities() {
    const promise = this.mainService.getLocation();
    promise.then((data: City[]) => {
      if (data) {
        data.forEach(element => {
          const city: City = {
            _id: element._id,
            name: element.name,
            tourists: element.tourists,
            image: element.image
          };
          this.cities.push(city);
        });
        console.log(this.cities);
      } else {
        console.log('fail');
      }
    });
  }
}
