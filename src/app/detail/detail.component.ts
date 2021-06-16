import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { data } from '../dataProducts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  products = data;

  product:any;

  constructor(private route:ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    let id =+ this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.productId === id);
  };

  onBack(){
    this._location.back();
  };

}
