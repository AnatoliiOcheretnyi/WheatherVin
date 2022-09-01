import {AnyAction} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import {GET_WEATHER_FORECAST_SUCCESS} from '../actions/actionsTypes';
import {WeatherForecast} from '../../api/types';
import {FiveDaysForecast} from '../types';

import {arrayPartition} from '../../utils/helper';

const initialState: FiveDaysForecast = {
  weatherForecast: [],
};

export default createReducer(initialState, builder => {
  builder.addCase(GET_WEATHER_FORECAST_SUCCESS, (state, action: AnyAction) => {
    const filteredWeatherForecasr = arrayPartition(
      action.payload.list as Array<WeatherForecast>,
    );
    return {
      ...state,
      weatherForecast: filteredWeatherForecasr,
    };
  });
});
