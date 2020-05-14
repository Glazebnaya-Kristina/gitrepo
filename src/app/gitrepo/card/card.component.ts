import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // @Input() result;
  // @Input() resultRepo;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.result, 'шняга');
    // console.log(this.resultRepo, 'eee');
  }


}
