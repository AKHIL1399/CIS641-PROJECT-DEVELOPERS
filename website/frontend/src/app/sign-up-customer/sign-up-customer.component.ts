import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatDialogRef} from  '@angular/material';
import { UserService } from '../services/user.service';
import { NgForm ,NgModel} from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../model/Users';
import { NavbarService } from '../services/navbar.service';


@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {
  data:Users;
  constructor(private router: Router,
               private service:UserService,private toastr: ToastrService,private navService:NavbarService) { }

  ngOnInit() {

    this.data= {
      id:0,
      firstName: "",
      lastName: "",
      email: "",
      address:"",
      phoneNumber:"",
      password:""
    }
      
  }
  
  SignUp(regForm:any){

   this.onClose();
}
onClose(){
 // this.matDialogRef.close();
  //this.service.formData.
}
resetFrom(form?:NgForm){
if(form ==null)
  form.resetForm();
  this.data = {
    id:0,
    firstName: "",
    lastName: "",
    email: "",
    address:"",
    phoneNumber:"",
 
    password:""
  }



}
onSubmit(form:NgForm){
  form.value.Role="Customer";
  if(form.value.Id>0)
  {
         this.updateData(form);
  }else{
    this.insertDate(form);
  }

}
insertDate(form:NgForm){


  let obj={
    firstName:form.controls.FirstName.value,
    lastName:form.controls.LastName.value,
    password:form.controls.Password.value,
    email:form.controls.Email.value,
    phoneNumber:form.controls.PhoneNumber.value,
    address:form.controls.Address.value,

  }
    this.service.postUser(obj).subscribe(
    res=>{
             this.resetFrom(form); 
             this.navService.user=res;
             this.toastr.success('Information saved successfully','Register User');
             this.router.navigateByUrl('/home');
    }, 
    err=>{
      console.log(err)
      this.toastr.error(err.error.error)
    }

  )
}
updateData(form:NgForm){
    this.service.putUser(form.value.Id,form.value).subscribe(
    res=>{
             this.resetFrom(form); 
             this.toastr.success('Information saved successfully','Register User');
             this.onClose();
    }, 
    err=>{
      console.log(err)
    }

  )
}
}
