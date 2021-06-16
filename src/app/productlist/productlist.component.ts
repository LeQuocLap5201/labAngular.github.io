import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import {data} from '../dataProducts';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = data;

  listProducts: IProduct[] = [];

  constructor() { };

  ngOnInit(): void {
    this.listProducts = this.products;
  }

  _listFilter:string = '';

  get listFilter(): string {
    return this._listFilter;
  };

  set listFilter(value: string) {
    this._listFilter = value;
    this.products = this.listFilter ? this.performFilter(this.listFilter) : this.listProducts;
  };

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listProducts.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  };

  changeStar:string ='';

  onRatingClicked(mess: string){
    this.changeStar = mess;
  }

}
