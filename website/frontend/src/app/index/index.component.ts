import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../services/product.service';
declare const carisols: any;
declare const myTest: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cartCounter:any;
  constructor(private productService:ProductService,private cartService:CartService,private toaster:ToastrService) {

    carisols()
    myTest();

   }

  ngOnInit() {
    this.cartService.share.subscribe(x => this.cartCounter = x);
    this.getProducts();
  }
  getDetail(){
    console.log("calling get details function")
  }
  getProducts(){
    this.productService.getItems().subscribe(res=>{
   
      this.productService.list =res;
      let index=0;
      this.productService.homeList=[];
      res.forEach(element => {
        index++;
        if(index<7){
          this.productService.homeList.push(element)
        }
    
      
      });
      console.log(this.productService.list)
    });

  }
  addtocart(item){
    let flag=false;
    this.productService.selectProducts.forEach( element=> {
      if(item._id ==element._id){
        flag=true;
      }
    });
    if(!flag){
      this.cartService.updateDate(++this.cartCounter);
      item.purchaseDate=new Date();
      item.total=item.price;
      item.quantity=1;
      this.productService.selectProducts.push(item);
      this.toaster.success('Added to cart','Cart');
    }else{
      this.toaster.info('Product already added in card','Cart');
    }
    console.log("add to cart called",item)
   
  }
}
