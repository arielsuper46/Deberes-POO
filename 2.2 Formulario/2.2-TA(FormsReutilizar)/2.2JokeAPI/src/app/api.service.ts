import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJokes(): Observable<any> {
    return this.http.get('https://sv443.net/jokeapi/v2/info')
  }

  getRandomJokes(): Observable<any>{
    return this.http.get('https://v2.jokeapi.dev/joke/Any')
  }

}