import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  BASE_URL = "https://fakestoreapi.com";
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<any>(this.BASE_URL+"/products")
          .pipe(map((response:any)=>{
            return response;
          }))
  }
}
