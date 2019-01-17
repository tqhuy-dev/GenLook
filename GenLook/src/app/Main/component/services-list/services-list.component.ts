import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { GenServices } from 'src/app/interface/genServices.interface';
import { YearEvent } from 'src/app/interface/yearEven.interface';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  listServices: GenServices[] = [];
  listYearEvent: YearEvent[] = [];
  @Input() mode = 0; // 0 : services , 1 : event
  constructor(private mainServices: MainService) {
   }

  ngOnInit() {
    console.log(this.mode);
    switch (this.mode) {
      case 0 : {
        this.getService();
      }break;

      case 1 : {
        this.getYearEvent();
      }break;
    }
  }

  getService() {
    this.mainServices.services.subscribe((data) => {
      this.listServices = data;
    });
    this.mainServices.getServices();
  }

  getYearEvent() {
    this.mainServices.yearEvent.subscribe((data) => {
      this.listYearEvent = data;
    });
    this.mainServices.getYearEvent();
  }
}
