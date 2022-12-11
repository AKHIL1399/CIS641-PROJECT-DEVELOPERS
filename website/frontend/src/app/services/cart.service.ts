import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedItems=new BehaviorSubject<number>(0);
  public share =this.selectedItems.asObservable();
  constructor() { }
  updateDate(count){
    this.selectedItems.next(count);
 }
}
