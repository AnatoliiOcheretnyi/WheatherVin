/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import {useTypedSelector} from '../../../../redux/reducers';

import {SpecifiedDayProps} from '../../types';

import FiveDaysListForecast from '../../mechanism/FiveDaysListForecastBottomSheet';

const SpecifiedDayForecastTemplate = ({day}: SpecifiedDayProps) => {
  const dayForecast = useTypedSelector(
    state =>
      state.weatherReducer.weatherForecast.find(d => {
        return d.data && d.data[0].dt_txt.substring(0, 10) === day.dateString;
      }) || {
        title: 'No data',
        data: [
          {
            weather: [],
            wind: {speed: 0},
            main: {temp: 0, feels_like: 0, pressure: 0, humidity: 0},
          },
        ],
      },
  );

  const {weather, wind, main} = dayForecast?.data[0];
  const {icon, main: weatherMain, description} = weather[0];
  const {speed} = wind;
  const {temp, feels_like, pressure, humidity} = main;

  const cloudsCondition = `${weatherMain} (${description})`;

  return (
    <>
      <View style={styles.sectionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{dayForecast?.title}</Text>
        </View>
        <View style={styles.ForecastCloudsContainer}>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `https://openweathermap.org/img/w/${icon}.png`,
            }}
          />
          <Text>{cloudsCondition}</Text>
        </View>
        <View style={styles.ForecastDetailsContainer}>
          <Text>Wind speed {speed}</Text>
          <Text>Temperature: {temp}</Text>
          <Text>Feels like: {feels_like}</Text>
          <Text>Pressure: {pressure}</Text>
          <Text>Humidity: {humidity}</Text>
        </View>
      </View>
      <FiveDaysListForecast isBottomSheet={false} />
    </>
  );
};

export default SpecifiedDayForecastTemplate;
