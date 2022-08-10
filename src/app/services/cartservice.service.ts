import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any=[];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    console.log(product);
    let index=this.cartItemList.findIndex((each: any) =>
      each.title == product.title
    );
    console.log(index);
    if(index == -1){
      this.cartItemList.push(product);
    }else{
      this.cartItemList[index].quantity += 1;
      this.cartItemList[index].total = this.cartItemList[index].quantity 
      * this.cartItemList[index].price;
    }
    
    
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
   

  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product : any){
    this.cartItemList.map((a:any, index: any)=>{
      if(product.id == a.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);

  }
  emptyCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
