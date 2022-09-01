import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';

import {getWeatherRequest} from '../../../../redux/actions/weather';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Calendar} from 'react-native-calendars';

const FiveDaysCalendarForecast = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getWeatherRequest());
  }, []);

  const currentDate = new Date();
  const fifthDate = new Date();
  fifthDate.setDate(currentDate.getDate() + 4);
  fifthDate.toLocaleDateString();

  return (
    <View style={styles.sectionContainer}>
      <Calendar
        minDate={currentDate.toDateString()}
        maxDate={fifthDate.toDateString()}
        onDayPress={day => {
          navigation.navigate(
            'SpecifiedDayForecastNav' as never,
            {day} as never,
          );
        }}
      />
    </View>
  );
};

export default FiveDaysCalendarForecast;
