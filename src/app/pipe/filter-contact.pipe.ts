import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(user: any[] , searchPopulation: any): any {
    if (!searchPopulation) return user;
    searchPopulation = searchPopulation.toLowerCase();
    let filteredContact = user.filter((user:any) => user.State.toLowerCase().includes(searchPopulation));   
    return filteredContact;
   
  }

  
}


