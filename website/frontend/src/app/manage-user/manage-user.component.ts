import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { User } from '../model/User';
import{MatDialog,MatDialogConfig} from  '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignUpTeamMemberComponent } from '../sign-up-team-member/sign-up-team-member.component';



@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

   User_DATA: User[] = [
    {id: 1, firstName: 'User1', lastName: 'User1', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'USA',phoneNumber:'0912254125'},
    {id: 2, firstName: 'User1', lastName: 'User1', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'USA',phoneNumber:'0912254125'},
    {id: 3, firstName: 'User1', lastName: 'User1', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'USA',phoneNumber:'0912254125'},
    {id: 4, firstName: 'User1', lastName: 'User1', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'USA',phoneNumber:'0912254125'},
  ];
  constructor(private dialog:MatDialog) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'street','actions'];
  dataSource = this.User_DATA;
  ngOnInit() {
  }
  Create(){
  const dialoCgonfig= new MatDialogConfig();
  dialoCgonfig.disableClose=true;
  dialoCgonfig.autoFocus=true;
  dialoCgonfig.width="60%";
  this.dialog.open(SignUpTeamMemberComponent,dialoCgonfig);
  }
}
