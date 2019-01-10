import { Component, OnInit, Input } from '@angular/core';
import { GenServices } from 'src/app/interface/genServices.interface';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.scss']
})
export class ServicesItemComponent implements OnInit {

  @Input() servicesItem: any = {
    _id: '',
    avg: 0,
    status: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
