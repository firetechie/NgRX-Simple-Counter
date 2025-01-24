import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from './store/counter.action';
import { Observable } from 'rxjs';
import { Counter } from './store/counter.model';
import { selectCount } from './store/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngrx-simple-counter';
  count$ !: Observable<number>;

  constructor(private store: Store<Counter>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCount)
  }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement())
  }

  reset() {
    this.store.dispatch(CounterActions.reset())
  }
}
