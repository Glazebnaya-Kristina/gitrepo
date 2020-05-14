import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  startWith,
  filter,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
  @Output() inputValue = new EventEmitter();
  @Output() buttonClick = new EventEmitter();

  terms = '';

  constructor() {}

  ngOnInit(): void {
    const terms$ = fromEvent<any>(this.inputRef.nativeElement, 'input').pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged()
    );

    terms$.subscribe((result) => {
      this.inputValue.emit(result);
      this.terms = result;
    });
  }

  onButtonClick() {
    this.buttonClick.emit(this.terms);
  }
}
