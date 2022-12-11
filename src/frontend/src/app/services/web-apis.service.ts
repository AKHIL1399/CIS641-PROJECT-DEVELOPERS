import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApisService {

  constructor(private httpClient: HttpClient) { }
  getUser():Observable<Users[]>{
   return this.httpClient.get<Users[]>('http://localhost:60967/api/users');
  }
}
