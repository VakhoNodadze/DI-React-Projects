import {
  SAVE_BARBERS_DATA,
  SELECT_BARBER,
  SET_LOADING,
  SET_ERROR,
} from './actions';
import { DASHBOARD_ACTIONS } from './types';
import { BARBERS_INITIAL_DATA } from './initialState';

const defaultState: DashboardState = {
  barbers: BARBERS_INITIAL_DATA,
  loading: false,
  error: null,
  selectedBarber: null,
};

const dashboardReducer = (state = defaultState, action: DASHBOARD_ACTIONS) => {
  switch (action.type) {
    case SAVE_BARBERS_DATA:
      return {
        ...state,
        barbers: action.payload,
      };
    case SELECT_BARBER:
      return {
        ...state,
        selectedBarber: action.barber,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
