import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import {ItemWeatherForecast} from '../../../../redux/types';

import {getHourTitle} from '../../../../utils/helper';

const SectionListItem = ({item}: ItemWeatherForecast) => {
  const degreesCelcius = String.fromCodePoint(8451);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{getHourTitle(item?.dt_txt)}</Text>
      <View style={styles.weatherDetail}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `https://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`,
          }}
        />
        <Text style={styles.temperature}>
          {item?.main?.temp_min}
          {degreesCelcius}
        </Text>
      </View>
    </View>
  );
};

export default SectionListItem;
