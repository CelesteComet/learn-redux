import { createStore, combineReducers } from 'redux';
import DefectsReducer from '../reducers/defects_reducer';

const RootReducer = combineReducers({
  defects: DefectsReducer 
});

const Store = createStore(RootReducer);
export default Store;