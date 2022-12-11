import { Component, OnInit, Inject } from '@angular/core';
import { NgForm ,NgModel} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-confirm-dailog',
  templateUrl: './confirm-dailog.component.html',
  styleUrls: ['./confirm-dailog.component.css']
})
export class ConfirmDailogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data,public dialogref:MatDialogRef<ConfirmDailogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
  this.dialogref.close(false);
}
}
