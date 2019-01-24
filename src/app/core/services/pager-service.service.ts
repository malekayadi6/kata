import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerServiceService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let i: number = 0 ;
    if (currentPage < 0 ) {
      currentPage = 0 ;
    }
    const totalPages = Math.ceil(totalItems / pageSize ) ;
    const startIndex = (currentPage - 1) * pageSize ;
    let endIndex = Math.min(startIndex + pageSize  - 1 , totalItems - 1);
    if (endIndex < 0 ) {
        endIndex = 0 ;
    }
    const pages = this.fillArrayWithNumbers(totalPages);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };


  }

   fillArrayWithNumbers(n) {
    let arr = Array.apply(null, Array(n));
    return arr.map( (x,i) =>  i + 1);
  }
}
