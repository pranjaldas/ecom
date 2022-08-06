import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { CartService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList: any;
  constructor(private apiService: ApiserviceService, private cartService: CartService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((response)=>{
      this.productList = response;
      console.log(this.productList);
      this.productList.forEach( (element: any) => {
        Object.assign(element,{quantity: 1,total: element.price});
      });
      console.log(this.productList);
    });

  }
  addToCart(product: any){
    this.cartService.addtoCart(product);
  }

}
