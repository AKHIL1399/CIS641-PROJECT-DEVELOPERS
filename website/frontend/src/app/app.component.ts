import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matrix';
  router: Router;
  constructor(private _router: Router,private productService:ProductService)
{
  this.router = _router; 
}
ngOnInit() {
  this.getProducts();
}
getProducts(){

  this.productService.getItems().subscribe(res=>{

    this.productService.list =res;
    this.productService.filtedListForGalry=res;
    console.log(this.productService.list)
  });
}
}
