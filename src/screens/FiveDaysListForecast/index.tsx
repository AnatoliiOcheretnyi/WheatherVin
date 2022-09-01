import React from 'react';
import {View} from 'react-native';
import FiveDaysListForecastTemplate from '../../components/fiveDaysForecast/template/FiveDaysListForecastTemplate';
import styles from './styles';

export default function DefaultFeed(): React.ReactElement {
  return (
    <View style={styles.container}>
      <FiveDaysListForecastTemplate />
    </View>
  );
}
