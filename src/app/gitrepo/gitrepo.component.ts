import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gitrepo',
  templateUrl: './gitrepo.component.html',
  styleUrls: ['./gitrepo.component.scss']
})
export class GitrepoComponent implements OnInit {

  // @Input() resultRepo;

  // result = '';
  // arrRepo: any;

  constructor() { }

  ngOnInit(): void {
  }

  // getArrRepo() {
  //   console.log(this.arrRepo);
  // }

  // resultOutputMetod(e) {
  //   return this.result = `${e} fggg`;
  // }
  //
  // getArrRepo(e) {
  //   console.log(e);
  //   return this.arrRepo;
  // }
}
