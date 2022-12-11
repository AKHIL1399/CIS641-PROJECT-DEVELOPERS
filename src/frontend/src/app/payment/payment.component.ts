import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<PaymentComponent>) { }
data:any;
ngOnInit() {

this.data={
  name:"",
  CardNumber:0,
  Valid:"",
  CCV:0
}

}

SignUp(regForm:any){

this.onClose();
}
onClose(){
this.matDialogRef.close(true);
//this.service.formData.
}

onSubmit(){
this.onClose();

}

}
