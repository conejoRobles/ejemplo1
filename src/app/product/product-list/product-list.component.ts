import { Component, OnInit, Input } from '@angular/core';
import { Iproduct } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input('datos') public products:Iproduct[];
  constructor() { }

  showImages : boolean = false;

  
  ngOnInit(): void {
  }

  changeImagesState() : void {
    this.showImages = !this.showImages;
  }

}
