import {GET_WEATHER_FORECAST_SUCCESS} from '../actions/actionsTypes';
import {AnyAction} from 'redux';
import {arrayPartition} from '../../utils/helper';
import {WeatherForecast} from '../../api/types';
import {FiveDaysForecast} from '../types';

const initialState: FiveDaysForecast = {
  weatherForecast: [],
};

export default (state = initialState, action: AnyAction): FiveDaysForecast => {
  switch (action.type) {
    case GET_WEATHER_FORECAST_SUCCESS: {
      const filteredWeatherForecasr = arrayPartition(
        action.payload.list as Array<WeatherForecast>,
      );
      return {
        ...state,
        weatherForecast: filteredWeatherForecasr,
      };
    }
    default:
      return state;
  }
};
