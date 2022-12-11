import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootUrl='http://localhost:3000/api';
  user:Users;
    constructor(private http:HttpClient) { }
    getUser(obj){
      return this.http.post(this.rootUrl+'/auth',obj);
    }
  }
  