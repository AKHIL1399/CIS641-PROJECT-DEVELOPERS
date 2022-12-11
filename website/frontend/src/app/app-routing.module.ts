import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { SignUpCustomerComponent } from './sign-up-customer/sign-up-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


import { CartComponent } from './cart/cart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
 
{path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: IndexComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sing-up-admin', component: SignUpAdminComponent },
  { path: 'sign-up-customer', component: SignUpCustomerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sign-up', component: SingUpComponent },

  { path: 'orders',component:MyordersComponent},

  { path: 'users',component:UsersComponent},
  
  
  {
    path: 'cart',
    component: CartComponent,
   
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
