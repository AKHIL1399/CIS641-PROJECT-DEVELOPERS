
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrderService } from '../services/order.service';
import { DailogService } from '../services/dailog.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../model/order';
import { CustomerRattingComponent } from '../customer-ratting/customer-ratting.component';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { PaymentComponent } from '../payment/payment.component';
import { ProductService } from '../services/product.service';
import { NavbarService } from '../services/navbar.service';
import { getLocaleExtraDayPeriods } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  cartCounter:number=0;
  items:any;
  constructor(private dialog:MatDialog,private orderservice:OrderService,private producService:ProductService,
    private cart:CartService,private myDailog:DailogService,private router:Router,
    private toaster:ToastrService,private userLogin:NavbarService,private userService:UserService) { }
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

  dataSource =[];
  // dataSource = this.orderservice.orderData;
  ngOnInit() {
   // this.dataSource = this.orderservice.orderData;
   // this.cart.share.subscribe(x=>this.cartCounter=x);
   this.getUsers()
  }
  getUsers(){
    if(this.userLogin.user._id){
    this.userService.getUsers().subscribe((res=>{
      console.log(res)
    this.items=res;
    }),err=>{
      console.log("error aa geya ha", err);
    
    })
  }else{
    this.toaster.error("Please Login First","User")
  }
  }


}
