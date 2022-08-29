import {combineReducers} from 'redux';
import {RootReducer} from '../types';
import weatherReducer from './weather';

const reducers = combineReducers({
  weatherReducer,
});

type Reducers = typeof reducers;

const rootReducer = (): Reducers => reducers;

export default rootReducer;

import {useSelector, TypedUseSelectorHook} from 'react-redux';
export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;
export type RootState = ReturnType<typeof rootReducer>;
