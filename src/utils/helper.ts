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
      title: getDateTitle(1),
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(1),
      ),
    },
    {
      title: getDateTitle(2),
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(2),
      ),
    },
    {
      title: getDateTitle(3),
      data: weatherForecastArray.filter(
        (f: {dt_txt: string}) =>
          getForecastDay(f?.dt_txt) === getCurrentDayOfTheMonth(3),
      ),
    },
    {
      title: getDateTitle(4),
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

export const getDateTitle = (number: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + number);
  const day = date.getDate().toString();
  const month = date.getMonth().toString();
  const stringDay = day.length === 1 ? `0${day}` : day;
  const stringMonth = month.length === 1 ? `0${month}` : month;
  return `${stringDay}.${stringMonth}`;
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
