import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GenLook';

  constructor(private route: Router , @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }
  ngOnInit() {
  }
}
