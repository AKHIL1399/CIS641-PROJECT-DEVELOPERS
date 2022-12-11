import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDailogComponent } from '../confirm-dailog/confirm-dailog.component';

@Injectable({
  providedIn: 'root'
})
export class DailogService {

  constructor(private dialog:MatDialog) { }
  openDailogBox(msg){
   return  this.dialog.open(ConfirmDailogComponent,{
      width:'390px',
      disableClose:true, 
      panelClass:'confirm-dialog-container',
      data:{
        messsage:msg
      }
    });
  }
}
