import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitrepoService {

  constructor(private http: HttpClient) { }

  getRepo(name: string) {
    return this.http.get('https://api.github.com/search/repositories?q=' + name);
  }
}
