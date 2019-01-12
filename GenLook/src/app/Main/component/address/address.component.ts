import { Component, OnInit, Input } from '@angular/core';
import { OfficeAddress } from 'src/app/interface/address.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: OfficeAddress = {
    _id: '',
    address: '',
    city: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
