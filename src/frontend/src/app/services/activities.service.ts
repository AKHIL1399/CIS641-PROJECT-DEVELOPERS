import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavbarService } from './navbar.service';
import { UserActivity } from '../model/UserActivity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  orders:Order[];
  userActivity:UserActivity;
  readonly rootUrl='http://localhost:60967/api'
  constructor(private http:HttpClient,private navbarService:NavbarService) { }
  get():Observable<Order[]>{
    return this.http.get<Order[]>(this.rootUrl+'/Common?id='+this.navbarService.user.id);
   }
   post(formData:UserActivity){
    console.log(formData);
    return this.http.post(this.rootUrl+'/UserActivities',formData);
  }
  put(id:any,formData:UserActivity){
   
    return this.http.put(this.rootUrl+'/UserActivities/'+id,formData);
  }
  delete(id:any){
   
    return this.http.delete(this.rootUrl+'/UserActivities/'+id);
  }
  
  getUserActivity():Observable<UserActivity[]>{
    return this.http.get<UserActivity[]>(this.rootUrl+'/UserActivities');
   }
}
