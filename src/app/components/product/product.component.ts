import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { CartService } from 'src/app/services/cartservice.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public searchKey: string = '';
  public filerCategory: string = '';
  public productList: any;
  public filterProductList: any;
  constructor(private apiService: ApiserviceService, 
    private cartService: CartService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((response)=>{
      this.productList = response;
      this.filterProductList = response;
      console.log(this.productList);
      this.productList.forEach( (element: any) => {
        if(element.category === "women's clothing" || element.category === "men's clothing"){
          element.category = "fashion";
        }
        Object.assign(element,{quantity: 1,total: element.price});
      });
      console.log(this.productList);
    });
    this.searchService.searchKey.subscribe((response:any)=>{
      this.searchKey = response;
    })

  }
  addToCart(product: any){
    this.cartService.addtoCart(product);
  }
  filter(category: string){
    console.log(category);
    this.filterProductList = this.productList.filter((product:any)=>{
      if(product.category == category || category ==""){
        return product;
      }
    })
  }

}
