import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchKey: string= '';
  public cartItemCount = 0;
  constructor(private cartService: CartService,private searchService: SearchService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.cartItemCount = res.length;
    })
  }
  search(event: any){
    this.searchKey = (event.target as HTMLInputElement).value;
    this.searchService.searchKey.next(this.searchKey);
  }

}
