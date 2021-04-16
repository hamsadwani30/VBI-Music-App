import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter-pipe'
})
export class FilterPipe implements PipeTransform {

  // transform(items: any[], searchText: string): any[] {
  //   return items ? items.filter(item => item.title.search(new RegExp(searchText, 'i')) > -1) : [];
  // }

  transform(value: any, input: any): any {

//     if(!value)return null;
//     if(!args)return value;

//     args = args.toLowerCase();

//     return value.filter(function(item){
//         return JSON.stringify(item).toLowerCase().includes(args);
//     });
if (input) {
  return value.filter(val => val.indexOf(input) >= 0);
} else {
  return value;
}
}
  }


