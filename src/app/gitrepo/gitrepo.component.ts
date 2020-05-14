import {Component, Input, OnInit} from '@angular/core';
import { GitrepoService } from './gitrepo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gitrepo',
  templateUrl: './gitrepo.component.html',
  styleUrls: ['./gitrepo.component.scss']
})
export class GitrepoComponent implements OnInit {
  resultRepo$: Observable<any>;

  constructor(public gitrepoService: GitrepoService) { }

  ngOnInit(): void {}

  inputValue(value: string) {
    this.getRepo(value);
  }

  buttonClick(value: string) {
    this.getRepo(value);
  }

  getRepo(value: string) {
    this.resultRepo$ = this.gitrepoService.getRepo(value);
    this.resultRepo$.subscribe(res => console.log(res));
  }
}
