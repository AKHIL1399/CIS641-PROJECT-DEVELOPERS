import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { categories } from '../model/categories';
import { CategoiesService } from '../services/categoies.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.css']
})
export class NavbarLogoutComponent implements OnInit {
  cartCounter:number;

  cat:categories[];
  constructor(private router:Router,private userLogin:NavbarService,
    private cart:CartService,private toaster:ToastrService,private orderservice:OrderService,
     private catdata :CategoiesService ,private productService:ProductService,) { }
  login:number;
  ngOnInit() {
    this.userLogin.customerLogin.subscribe(x=>this.login=x);
    this.cart.share.subscribe(x=>this.cartCounter=x);
    this.cat=this.catdata.data;
  }
  
  logout(){
    this.userLogin.update(0);
    this.userLogin.user=null;
    //this.cart.share.subscribe(x=>this.cartCounter=0);
    //this.catdata.data=null;
    this.cart.updateDate(0);
    this.orderservice.orderData=[];
    this.router.navigateByUrl('/home');
  }
  selectCategory(cat,subCat){
    console.log("categori",cat)
    console.log("sub categori",subCat)
    this.productService.cat=cat;
    this.productService.subCat=subCat;
    this.filterCategoris(cat,subCat)
    this.router.navigate(['/gallery']);

  }
  filterCategoris(cat,subCat){
    var filtera = {category: cat, subCategory: subCat};
//   this.list=this.productService.list;
   this.filter(this.productService.list,filtera)

  }
 filter(items, filter) {
    this.productService.filtedListForGalry = [];

    items.forEach(item => {
      if(item.category==filter.category && item.subCategory==filter.subCategory) 
      this.productService.filtedListForGalry.push(item);
    });
    console.log("filtered List",this.productService.filtedListForGalry )
    //return result;
}
  loadComponent(componentType:string,type){
    this.userLogin.selectedcat=componentType;
    if(this.userLogin.user ==null && componentType=="appointments"){
      this.router.navigate(['/sign-in']);
      this.toaster.info('Please Sign in First.','User');
    }else{
      if(componentType=="appointments"){
        this.router.navigateByUrl('/manage-precheck');
      }else{
        this.router.navigateByUrl('/manage-precheck', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/manage-packages']);
       
       }); 
      }
      // this.service.productType='component'; 
    }
  }
  fiterItems(text){
    if(text.length>0){


    console.log("search change",text)
    this.productService.filtedListForGalry = [];
 
    this.productService.list.forEach(item => {
      let name=item.name.toLowerCase()
      
      if(name.search(text.toLowerCase())>=0 ) 
      this.productService.filtedListForGalry.push(item);
    });
  }else{
    this.productService.filtedListForGalry =this.productService.list;
  }
    console.log("filtered List",this.productService.filtedListForGalry )
  }
  focusFunction(){
    this.router.navigateByUrl('/gallery');
  }
}
