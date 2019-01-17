import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-paige',
  templateUrl: './detail-paige.component.html',
  styleUrls: ['./detail-paige.component.scss']
})
export class DetailPaigeComponent implements OnInit {

  city: String = 'quoc huy';
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.city = this.router.snapshot.params.city;
  }

}
