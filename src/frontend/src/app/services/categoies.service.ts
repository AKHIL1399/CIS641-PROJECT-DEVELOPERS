import { Injectable } from '@angular/core';
import { categories } from '../model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoiesService {
  data:categories[];
  constructor() { 
    this.data = [

    {Id: 1, name: 'SHIRTS',type:1},
    {Id: 2, name: 'PANTS',type:1},
    {Id: 3, name: 'SHOES',type:1},
    {Id: 4, name: 'SUTES',type:1},
    {Id: 5, name: 'TIE',type:1},
    {Id: 1, name: 'PANTS',type:2},
    {Id: 2, name: 'SHIRTS',type:2},
    {Id: 3, name: 'BAGES',type:2},
  
  
  ];
  }
   
}
