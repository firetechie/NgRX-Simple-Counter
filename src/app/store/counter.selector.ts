import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Counter } from './counter.model'

export const selectFeatureCounter = createFeatureSelector<Counter>('counter');

export const selectCount = createSelector(selectFeatureCounter, (state) => state.count)

