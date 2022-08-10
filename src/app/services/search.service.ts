import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchKey= new BehaviorSubject<string>("");
  constructor() { }
}
