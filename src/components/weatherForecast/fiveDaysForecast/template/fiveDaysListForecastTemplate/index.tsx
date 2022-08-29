import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import FiveDaysCalendarForecast from '../../mechanism/fiveDaysCalendarForecast';
import FiveDaysListForecastBottomSheet from '../../mechanism/fiveDaysListForecastBottomSheet';

const FiveDaysForecastTemplate = () => {
  return (
    <View style={styles.sectionContainer}>
      <FiveDaysCalendarForecast />
      <FiveDaysListForecastBottomSheet isBottomSheet={true} />
    </View>
  );
};

export default FiveDaysForecastTemplate;
