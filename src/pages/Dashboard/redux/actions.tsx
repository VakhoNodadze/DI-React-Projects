import {
  SAVE_BARBERS_DATA_ACTION,
  SELECT_BARBER_ACTION,
  SET_ERROR_ACTION,
  SET_LOADING_ACTION,
} from './types';

export const SAVE_BARBERS_DATA = 'SAVE_BARBERS_DATA';
export const SELECT_BARBER = 'SELECT_BARBER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const saveBarbersData = (
  barberData: BarberItem[]
): SAVE_BARBERS_DATA_ACTION => ({
  type: SAVE_BARBERS_DATA,
  payload: barberData,
});

export const selectBarber = (barber: BarberItem): SELECT_BARBER_ACTION => ({
  type: SELECT_BARBER,
  payload: barber,
});

export const setLoading = (loading: boolean): SET_LOADING_ACTION => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error: string): SET_ERROR_ACTION => ({
  type: SET_ERROR,
  payload: error,
});
