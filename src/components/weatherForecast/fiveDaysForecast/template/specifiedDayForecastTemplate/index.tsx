/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import {useTypedSelector} from '../../../../../redux/reducers';

import FiveDaysListForecast from '../../mechanism/fiveDaysListForecastBottomSheet';

const specifiedDayForecastTemplate = (props: any) => {
  const day = props.route.params.day;

  const dayForecast = useTypedSelector(state =>
    state.weatherReducer.weatherForecast.find(d => {
      return d.data && d.data[0].dt_txt.substring(0, 10) === day.dateString;
    }),
  );

  const {weather, wind, main}: any = dayForecast?.data[0];
  const {icon, main: weatherMain, description} = weather[0];
  const {speed} = wind;
  const {temp, feels_like, preasure, humidity} = main;

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
          <Text>Preasure: {preasure}</Text>
          <Text>Humidity: {humidity}</Text>
        </View>
      </View>
      <FiveDaysListForecast isBottomSheet={false} />
    </>
  );
};

export default specifiedDayForecastTemplate;
