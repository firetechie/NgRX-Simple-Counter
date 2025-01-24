import { createReducer, on } from '@ngrx/store'
import { Counter } from './counter.model'
import * as CounterActions from './counter.action'

export const initialCounterState: Counter = {
    count: 0
}

export const counterReducer = createReducer(initialCounterState,
    on(CounterActions.increment, (state) => ({ ...state, count: state.count + 1 })),
    on(CounterActions.decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(CounterActions.reset, (state) => ({ ...state, count: 0 }))
)