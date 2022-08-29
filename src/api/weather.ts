import {ApiResult} from './types';

const apiKey = 'd613bccc3002e49ec3b2738b582aed59';
const endpoint = 'https://api.openweathermap.org';

export const getWeatherForecast = async () => {
  try {
    const response = await fetch(
      `${endpoint}/data/2.5/forecast?lat=49.2331&lon=28.4682&&cnt=90&appid=${apiKey}&units=metric`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const result = (await response.json()) as ApiResult;
    return result;
  } catch (error) {
    console.error(error);
  }
};
