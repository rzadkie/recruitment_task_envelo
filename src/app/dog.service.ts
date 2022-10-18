import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';
import { Dog } from './dog';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  private dogListURL = 'https://dog.ceo/api/breeds/list/all';

  constructor(
    private http: HttpClient
  ) { }

  getDog(): Observable<Dog>{
    return this.http.get<Dog>(this.dogListURL).pipe( 
      map(data => {
      console.log('map data' + data);
      return data;
      })
);
  }
  getDogImg(breed:string): Observable<Dog>{
    breed = breed.replace(' ', '/');
    return this.http.get<Dog>(`https://dog.ceo/api/breed/${breed}/images/random`).pipe( 
      map(data => {
      console.log('map data' + data);
      return data;
      })
);
  }
  
}
