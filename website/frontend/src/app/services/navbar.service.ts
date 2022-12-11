import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  user:any;
  selectedcat:string;
  isAdmin=false;
  private login=new BehaviorSubject<number>(0);
  public customerLogin =this.login.asObservable();
  constructor() { }
  update(val){
    this.login.next(val);
 }
}
