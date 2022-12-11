import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrderService } from '../services/order.service';
import { CartService } from '../Services/cart.service';
import { DailogService } from '../services/dailog.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../model/order';
import { CustomerRattingComponent } from '../customer-ratting/customer-ratting.component';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';
import { ProductService } from '../services/product.service';

import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartCounter:number=0;
  constructor(private dialog:MatDialog,private orderservice:OrderService,private producService:ProductService,
    private cart:CartService,private myDailog:DailogService,private router:Router,
    private toaster:ToastrService,private userLogin:NavbarService) { }
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','actions'];
//    data:Order[]=[{
//     id:1,
//    userId: 1 ,
//    productId: 1 ,
//    purchaseDate: "25/10/2022" ,
//    quantity: 2 ,
//    price: 50 ,
//    total:100,
//    image:"assets/img/carisol02.jpg",
//  }]

  dataSource = this.producService.selectProducts;
  // dataSource = this.orderservice.orderData;
  ngOnInit() {
   // this.dataSource = this.orderservice.orderData;
    this.cart.share.subscribe(x=>this.cartCounter=x);
  }
  Create(){
    if(this.producService.selectProducts.length>0){
      if(!this.userLogin.user){
       this.toaster.warning("User have to login before placing order","User")
       this.router.navigate(['/sign-in']);
      }
      let orderdetail=[]
      let totalPrice=0;
      this.producService.selectProducts.forEach(element => {
        totalPrice= element.total+totalPrice;
       let  obj={
        name:element.name,
        price:element.price,
        discPrice:element.discPrice,
        category:element.category,
        subCategory:element.subCategory,
        material:element.material,
        detail:element.detail,
        imageUrl:element.imageUrl,
        purchaseDate:element.purchaseDate,
        total:element.total,
        quantity:element.quantity,
        }
        orderdetail.push(obj)
      });
      let order={
        products:this.producService.selectProducts.length,
        totalPrice:totalPrice,
        items:orderdetail,
        userid:this.userLogin.user._id,
      }
    console.log("ready object",order)
    this.orderservice.postOrder(order).subscribe(
      res=>{
              
              

              const dialoCgonfig= new MatDialogConfig();
              dialoCgonfig.disableClose=true;
              dialoCgonfig.autoFocus=true;
              dialoCgonfig.width="60%";
               this.dialog.open(PaymentComponent,dialoCgonfig).beforeClose()
               .subscribe(x=>{
                this.toaster.success('Information saved successfully','Order Module');
                this.cartCounter=0;
               this.cart.updateDate(this.cartCounter);
               this.producService.selectProducts=[]; 
               this.dataSource = this.producService.selectProducts;
                this.dialog.open(CustomerRattingComponent,dialoCgonfig).beforeClose()
                .subscribe(x=>{
                 this.router.navigate(['/home']);
                });
               });
      }, 
      err=>{
        console.log(err)
      }
    );
    }else{
      this.toaster.info('Cart is empty.','Order Module'); 
    }
  }
    addQuantity(row){
           row.quantity++;
           row.total=row.quantity*row.price;
    }
    subtractQuantity(row){
      if(row.quantity>1){
      row.quantity--;
      row.total=row.quantity*row.price;
      }
}
removeItem(row){
  this.myDailog.openDailogBox('Are you sure to delete this record ?').afterClosed()
  .subscribe(res=>{
    if(res){
      this.producService.selectProducts = this.producService.selectProducts.filter(obj => obj !== row);
      this.dataSource = this.producService.selectProducts;
      this.cartCounter--;
      this.cart.updateDate(this.cartCounter); 
    }
  });
}

}
