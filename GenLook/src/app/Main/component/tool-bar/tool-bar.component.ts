import { Component, OnInit } from '@angular/core';
import { WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    localStorage.removeItem('uuid');
    this.router.navigate(['/login']);
  }
}
