import { TestBed } from '@angular/core/testing';

import { PagerServiceService } from './pager-service.service';

describe('PagerServiceService', () => {
  let service: PagerServiceService ;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(PagerServiceService);
  });

  it('should be created', () => {
    const service: PagerServiceService = TestBed.get(PagerServiceService);
    expect(service).toBeTruthy();
  });

  it ( ' should paginate itmes with input totale items ' , () => {


      expect( service.getPager(20,1,5)).toEqual({
        'totalItems': 20,
        'currentPage': 1 ,
        'pageSize': 5,
        'totalPages': 4 ,
        'startIndex': 0 ,
        'endIndex': 4 ,
        'pages': [1, 2, 3, 4]

      });

    expect( service.getPager(10,2,5)).toEqual({
      'totalItems': 10,
      'currentPage': 2 ,
      'pageSize': 5,
      'totalPages': 2 ,
      'startIndex': 5 ,
      'endIndex': 9 ,
      'pages': [1, 2 ]
    });

    expect( service.getPager(0,1,5)).toEqual({
      'totalItems': 0,
      'currentPage': 1 ,
      'pageSize': 5,
      'totalPages': 0,
      'startIndex': 0 ,
      'endIndex': 0 ,
      'pages': []
    });

  }) ;
});
