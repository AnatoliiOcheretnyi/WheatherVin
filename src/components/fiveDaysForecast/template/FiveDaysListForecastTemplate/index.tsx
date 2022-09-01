import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import FiveDaysCalendarForecast from '../../mechanism/FiveDaysCalendarForecast';
import FiveDaysListForecastBottomSheet from '../../mechanism/FiveDaysListForecastBottomSheet';

const FiveDaysForecastTemplate = () => {
  return (
    <View style={styles.sectionContainer}>
      <FiveDaysCalendarForecast />
      <FiveDaysListForecastBottomSheet isBottomSheet={true} />
    </View>
  );
};

export default FiveDaysForecastTemplate;
