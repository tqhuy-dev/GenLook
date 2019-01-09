import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/interface/city.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input() city: City = {
    _id: '',
    name: '',
    tourists: '',
    image: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
