import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_WEATHER_FORECAST_REQUEST} from '../actions/actionsTypes';

import {getWeatherSuccess} from '../actions/weather';

import {ApiResult} from '../../api/types';

import {getWeatherForecast} from '../../api/weather';

function* getWeatherForecastRequest(): Generator {
  try {
    const result = yield call(getWeatherForecast);
    if (result) yield put(getWeatherSuccess(result as ApiResult));
  } catch (error) {
    console.log(error);
  }
}

export default function* logInWatcher(): Generator {
  yield takeLatest(GET_WEATHER_FORECAST_REQUEST, getWeatherForecastRequest);
}
