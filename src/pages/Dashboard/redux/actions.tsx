import {
  SAVE_BARBERS_DATA_ACTION,
  SELECT_BARBER_ACTION,
  SET_ERROR_ACTION,
  SET_LOADING_ACTION,
  UPDATE_BARBER_REVIEW_ACTION,
} from './types';

export const SAVE_BARBERS_DATA = 'SAVE_BARBERS_DATA';
export const SELECT_BARBER = 'SELECT_BARBER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_BARBER_REVIEW = 'UPDATE_BARBER_REVIEW';

export const saveBarbersData = (
  barberData: BarberItem[]
): SAVE_BARBERS_DATA_ACTION => ({
  type: SAVE_BARBERS_DATA,
  payload: barberData,
});

export const selectBarber = (barber: BarberItem): SELECT_BARBER_ACTION => ({
  type: SELECT_BARBER,
  barber,
});

export const setLoading = (): SET_LOADING_ACTION => ({
  type: SET_LOADING,
});

export const setError = (error: string): SET_ERROR_ACTION => ({
  type: SET_ERROR,
  payload: error,
});

export const updateBarberReview = (
  review: Review,
  barberId: string
): UPDATE_BARBER_REVIEW_ACTION => ({
  type: UPDATE_BARBER_REVIEW,
  review,
  barberId,
});
