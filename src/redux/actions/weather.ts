import {
  GET_WEATHER_FORECAST_REQUEST,
  GET_WEATHER_FORECAST_SUCCESS,
} from './actionsTypes';

import {DayWeatherForecast} from '../types';

export const getWeatherRequest = () => ({
  type: GET_WEATHER_FORECAST_REQUEST,
});

export const getWeatherSuccess = (payload: Array<DayWeatherForecast>) => ({
  type: GET_WEATHER_FORECAST_SUCCESS,
  payload,
});
