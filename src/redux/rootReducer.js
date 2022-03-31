import { combineReducers } from 'redux';
import { noteReducer } from './reducers/noteReducers';

export const rootReducer = combineReducers({
    note: noteReducer,
})