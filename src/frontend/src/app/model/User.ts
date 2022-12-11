import {Component} from '@angular/core';

export interface User {
  id  : number;
  firstName: string;
  lastName: string;
  lineAddress: string;
  street:string;
  county:string;
  country:string;
  passowrd:string;
  confirmPassword:string;
  email:string;
  phoneNumber:string;
}

