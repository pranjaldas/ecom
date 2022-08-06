import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartItemCount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.cartItemCount = res.length;
    })
  }

}
