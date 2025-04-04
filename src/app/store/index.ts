import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as mosData from './reducers/mos-data.reducer';

export interface State {
  mosData: mosData.State;
}

export const reducers: ActionReducerMap<State> = {
  mosData: mosData.mosDataReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<State> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const selectMosDataState = createFeatureSelector<mosData.State>('mosData');
export const selectAllMosData = createSelector(selectMosDataState, mosData.selectAllMosData);
export const selectLibrary = createSelector(selectMosDataState, mosData.selectLibrary);
