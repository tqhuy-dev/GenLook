import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String = '';
  password: String = '';
  confirmPassword: String = '';
  constructor() { }

  ngOnInit() {
  }

}
