import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product} from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly rootUrl='http://localhost:3000/api'
formData:Product;
productType:string="package";
list:any;
cat:any;
subCat:any;
filtedListForGalry:any;
homeList:any;
selectProducts=[];
  constructor(private http:HttpClient) { }
  post(formData:Product){
    console.log(formData);
    return this.http.post(this.rootUrl+'/Products',formData);
  }
  put(id:any,formData:Product){
   
    return this.http.put(this.rootUrl+'/Products/'+id,formData);
  }
  delete(id:any){
   
    return this.http.delete(this.rootUrl+'/Products/'+id);
  }
  refreshList(){
    this.http.get(this.rootUrl+'/Products').toPromise().then(res=>this.list=res as Product[])
  }
  get():Observable<Product[]>{
    return this.http.get<Product[]>(this.rootUrl+'/Products');
   }
   saveIamge(name:string,fileToUpload:File){
     const formData = new FormData();
     formData.append('file',fileToUpload,fileToUpload.name);
     
     console.log(formData)
     return this.http.post(this.rootUrl+'/Products',formData,{reportProgress:true,observe:'events'});
   }
   
   getItems():Observable<any>{
    return this.http.get<any>(this.rootUrl+'/items');
   }
  }
