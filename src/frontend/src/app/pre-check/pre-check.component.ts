import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Calculations, EmailData } from '../model/calculations';
import { MatTableDataSource } from '@angular/material';
import { NgForm ,NgModel} from '@angular/forms';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pre-check',
  templateUrl: './pre-check.component.html',
  styleUrls: ['./pre-check.component.css']
})
export class PreCheckComponent implements OnInit {
  dataSource=new MatTableDataSource<Calculations>();
  sunHrPerDay=5;
  display=false;
  x:number=0;
  y:number=0;
  z:number=0;
  a:number=0;
  b:number=300;
  c:number=0;
 // data:Calculations[];
 // displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','ddlval'];
 displayedColumns: string[] = ['id','firstName' ,'lastName', 'email', 'street'];
 email="";
  teachDS: {};
  data = [
    {Applience: 1, Quantity: 0,Watts:0,HourDay:0,WattDay:0,ddlval:""},
    {Applience: 2, Quantity: 0,Watts:0,HourDay:0,WattDay:0,ddlval:""},
    {Applience: 3, Quantity: 0,Watts:0,HourDay:0,WattDay:0,ddlval:""},
  ];
  selecteddata =this.data;
  constructor(private changeDetectorRefs: ChangeDetectorRef
    ,private orderservice:OrderService,private toaster:ToastrService) { }
 
  ngOnInit() {
    this.dataSource.data=this.data;
    this.selecteddata=[];
  }
  Create(){
    let row = new Calculations();
    let id=Math.max.apply(Math, this.data.map(function(o) { return o.Applience; }));
    id++;
    row=
      {Applience: id, Quantity: 0,Watts:0,HourDay:0,WattDay:0,ddlval:""}
    console.log(this.data)
    this.data.push(row);
    this.dataSource.data=this.data;
  }
  addQuantity(row){
    // if(row.Watts>0){
    //   row.Watts=(row.Quantity*row.HourDay)*row.Watts;
    //   row.WattDay=(row.Quantity*row.HourDay)*row.Watts;
    // }else{
     // row.Watts=(row.Quantity*row.HourDay)*row.ddlval;
      row.WattDay=(row.Quantity*row.HourDay)*row.ddlval;
   // }
    this.fillFields();
  }
  addWhatts(row){
    row.Watts=(row.Quantity*row.HourDay)*row.Watts;
    row.WattDay=(row.Quantity*row.HourDay)*row.Watts;
    this.fillFields();
  }
  populateValue(row,val){
  if(val.value){
       row.Quantity=1;
       row.Watts=val.value;
       row.HourDay=1;
       row.WattDay=val.value;
  }else{
    row.Quantity=0;
    row.Watts=0;
    row.HourDay=0;
    row.WattDay=0;
     
  }
  this.fillFields();
  }
  calculateValue(){
    this.selecteddata=[];
   this.a=(this.y/1000)/this.sunHrPerDay*0.77;
   this.c=(this.a*1000)/this.b;
   this.a=Math.ceil(this.a);
   this.c=Math.ceil(this.c);
   this.dataSource.data.forEach(element => {
    
    if(element.ddlval){
      let ddl="";
      switch (element.ddlval) {
        case "1200":
          ddl="Electric Heater";
            break;
        case "300":
          ddl="Air Cooler";
            break;
        case "700":
          ddl="Tube Lights";
            break;
        case "1000":
          ddl="Water Pump";
            break;
      }
    let row={
      Applience: element.Applience, 
      Quantity: element.Quantity,
      Watts:element.Watts,
      HourDay:element.HourDay,
      WattDay:element.WattDay,
      ddlval:ddl
    }
    console.log(row)
    this.selecteddata.push(row);
      }
});
        this.display=true;
  }
  fillFields(){
    this.x=0;
    this.dataSource.data.forEach(element => {
     this.x=+element.WattDay+this.x;
     
    
});
this.y=this.x+(this.x*30/100);
this.z=(this.x*30/100);
  }
  sendEmail(email){
   
      let obj=new EmailData();
      obj.a=this.a;
      obj.b=this.b;
      obj.c=this.c;
      obj.sunHrPerDay=this.sunHrPerDay;
      obj.z=this.z;
      obj.email=email;
      obj.calculations=this.selecteddata;
      this.orderservice.sendEmail(obj).subscribe(
        res=>{
                 this.toaster.success('Email sent successfully','Calculations');
        }, 
        err=>{
          console.log(err)
        }
      );
      
  }
}
