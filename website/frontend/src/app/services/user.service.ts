import { Injectable } from '@angular/core';
import { Users } from '../model/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl='http://localhost:3000/api';
formData:Users;
list:Users[];
  constructor(private http:HttpClient) { }
  postUser(formData){
    return this.http.post(this.rootUrl+'/Users',formData);
  }
  putUser(id:any,formData:Users){
   
    return this.http.put(this.rootUrl+'/Users/'+id,formData);
  }
  deleteUser(id:any){
   
    return this.http.delete(this.rootUrl+'/Users/'+id);
  }
  refreshList(){
    this.http.get(this.rootUrl+'/Users').toPromise().then(res=>this.list=res as Users[])
  }
  getUser():Observable<Users[]>{
    return this.http.get<Users[]>(this.rootUrl+'/Users');
   }
   getOrders(id){
    return this.http.get(this.rootUrl+'/Orders/'+id);
  }
  getUsers(){
    return this.http.get(this.rootUrl+'/Users');
  }
}
