import React from 'react';
import {View} from 'react-native';
import SpecifiedDayForecastTemplate from '../../components/fiveDaysForecast/template/SpecifiedDayForecastTemplate';
import {SpecifiedDayForecastScreenProps} from '../../components/fiveDaysForecast/types';
import styles from './styles';

export default function DefaultFeed({
  route,
}: SpecifiedDayForecastScreenProps): React.ReactElement {
  return (
    <View style={styles.container}>
      <SpecifiedDayForecastTemplate day={route.params.day} />
    </View>
  );
}
