import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-ratting',
  templateUrl: './customer-ratting.component.html',
  styleUrls: ['./customer-ratting.component.css']
})
export class CustomerRattingComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService,private matDialogRef:MatDialogRef<CustomerRattingComponent>) { }
    currentRate = 8;
  ngOnInit() {
  }
  SignUp(regForm:any){

    this.onClose();
 }
 onSubmit(){
   this.toastr.success("Thanks for rating us","Order Module");
     this.onClose();
  }
 
 onClose(){
   this.matDialogRef.close(true);
   
   
 }

}
