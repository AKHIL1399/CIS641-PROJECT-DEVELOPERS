import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
list:any;
cartCounter:any;
  constructor(private productService:ProductService,private cartService:CartService,private toaster:ToastrService,) { }

  ngOnInit() {
    this.cartService.share.subscribe(x => this.cartCounter = x);
   // this.filterCategoris(this.productService.cat,this.productService.subCat)
  }

  getDetail(){
    console.log("calling get details function")
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
