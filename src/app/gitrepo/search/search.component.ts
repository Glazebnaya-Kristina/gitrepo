import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GitrepoService} from '../gitrepo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() resultOutput = new EventEmitter();
  @Output() resultRepo = new EventEmitter();

  repoName = '';
  resultRepo$: any;
  response;

  constructor(
    private gitrepoService: GitrepoService
  ) { }

  ngOnInit(): void {
    // this.resultOutput.emit('hi?fucking men');
  }

  getRepo(name: string) {
    this.resultRepo$ = this.gitrepoService.getRepo(name);
    this.resultRepo.emit(this.resultRepo$);
  }
}
