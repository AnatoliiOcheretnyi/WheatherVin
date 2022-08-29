import {WeatherForecast} from '../api/types';
import {DayWeatherForecast} from '../redux/types';

export const arrayPartition = (
  weatherForecastArray: Array<WeatherForecast>,
): Array<DayWeatherForecast> => {
  return [
    {
      title: 'Today',
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(0),
      ),
    },
    {
      title: 'Tomorrow',
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(1),
      ),
    },
    {
      title: '3d day',
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(2),
      ),
    },
    {
      title: '4th day',
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(3),
      ),
    },
    {
      title: '5th day',
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(4),
      ),
    },
  ];
};

export const getCurrentDayOfTheMonth = (number: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + number);
  const day = date.getDate().toString();
  return day.length === 1 ? `0${day}` : day;
};

export const getForecastDay = (dateString: string): string => {
  return dateString.substring(8, 10);
};

export const getHourTitle = (dateString: string): string => {
  const hourSubstring = (+dateString.substring(10, 13) + 2).toString();
  const hourTitle = `${dateString.substring(10, 16)} - ${
    hourSubstring.length === 1 ? `0${hourSubstring}` : hourSubstring
  }:59`;
  return hourTitle;
};
