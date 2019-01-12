import { Component, OnInit } from '@angular/core';
import { OfficeAddress } from 'src/app/interface/address.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {

  Title: String = 'OFFICE ADDRESS';
  officeAddress: OfficeAddress[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.address.subscribe((data) => {
      this.officeAddress = data;
    });
    this.mainService.getAddress();
  }

}
