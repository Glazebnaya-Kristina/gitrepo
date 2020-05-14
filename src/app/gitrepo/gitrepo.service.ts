import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitrepoService {

  constructor(private http: HttpClient) { }

  getRepo(name: string): Observable<any> {
    return this.http.get<any>('https://api.github.com/search/repositories?q=' + name);
  }
}
