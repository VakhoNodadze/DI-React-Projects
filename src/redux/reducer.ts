import { combineReducers } from 'redux';

import barbersReducer from '../pages/Dashboard/redux/reducer';

const reducer = combineReducers({ barbersReducer });

export default reducer;
