import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './employee';

@Pipe({name:"test"})
export class filterPipe implements PipeTransform{
  transform = function(items:employee[], searchText:string, genderMale:string, genderFemale:string){
    if(!genderMale && genderFemale){
      items = items.filter((item)=>item.gender==='Female');
    } else if(genderMale && !genderFemale){
      items = items.filter((item)=>item.gender==='Male');
    }

    return items.filter((item)=>item.first_name.indexOf(searchText)
    || item.last_name.indexOf(searchText)||item.email.indexOf(searchText));
  }
}