import React, {useCallback, useRef, useMemo, useEffect} from 'react';
import {View, Text, Image, SectionList} from 'react-native';
import styles from './styles';

import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';

import {getWeatherRequest} from '../../../../../redux/actions/weather';

import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../../../redux/reducers';
import {ItemWeatherForecast} from '../../../../../redux/types';

import {getHourTitle} from '../../../../../utils/helper';

const FiveDaysListForecastBottomSheet = ({
  isBottomSheet,
}: {
  isBottomSheet: boolean;
}) => {
  const dispatch = useDispatch();
  const days = useTypedSelector(state => state.weatherReducer.weatherForecast);

  useEffect(() => {
    dispatch(getWeatherRequest());
  }, []);

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleSheetChange = useCallback((index: number) => {
    if (index === 0) sheetRef.current?.snapToIndex(1);
  }, []);

  const ForecastItem = ({item}: ItemWeatherForecast) => {
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

  return (
    <View style={[styles.sectionContainer, isBottomSheet && styles.paddingTop]}>
      {isBottomSheet ? (
        <BottomSheet
          ref={sheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <BottomSheetSectionList
            sections={days}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
            renderItem={({item}) => <ForecastItem item={item} />}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      ) : (
        <SectionList
          sections={days}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ForecastItem item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      )}
    </View>
  );
};

export default FiveDaysListForecastBottomSheet;
