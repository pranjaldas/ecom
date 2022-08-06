import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartProducts: any[]=[];
  public grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.cartProducts = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  deleteItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.emptyCart();
  }

}
