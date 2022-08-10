import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchKey: string , propName:string ): any[] {
    let result: any[] = [];
    if(!value || searchKey === '' || propName === ''){
      return value;
    }
    value.forEach((each:any)=>{
      if(each[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(each);
      }
    })
    return result;
  }

}
