import {
  SAVE_BARBERS_DATA,
  SELECT_BARBER,
  SET_ERROR,
  SET_LOADING,
  UPDATE_BARBER_REVIEW,
} from './actions';

export type SAVE_BARBERS_DATA_ACTION = {
  type: typeof SAVE_BARBERS_DATA;
  payload: BarberItem[];
};

export type SELECT_BARBER_ACTION = {
  type: typeof SELECT_BARBER;
  barber: BarberItem;
};

export type SET_LOADING_ACTION = {
  type: typeof SET_LOADING;
};

export type SET_ERROR_ACTION = {
  type: typeof SET_ERROR;
  payload: any;
};

export type UPDATE_BARBER_REVIEW_ACTION = {
  type: typeof UPDATE_BARBER_REVIEW;
  review: Review;
  barberId: string;
};

export type DASHBOARD_ACTIONS =
  | SAVE_BARBERS_DATA_ACTION
  | SELECT_BARBER_ACTION
  | SET_LOADING_ACTION
  | SET_ERROR_ACTION
  | UPDATE_BARBER_REVIEW_ACTION;
