import React, {useCallback, useRef, useMemo, useEffect} from 'react';
import {View, Text, SectionList} from 'react-native';
import styles from './styles';

import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';

import {getWeatherRequest} from '../../../../redux/actions/weather';

import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../../redux/reducers';
import {ItemWeatherForecast} from '../../../../redux/types';
import {SectionTitleProps} from '../../types';

import SectionListItem from '../SectionListItem';

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

  const renderItem = ({item}: ItemWeatherForecast) => {
    return <SectionListItem item={item} />;
  };

  const renderSectionHeader = ({section: {title}}: SectionTitleProps) => (
    <Text style={styles.header}>{title}</Text>
  );

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
            keyExtractor={item => item.dt.toString()}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      ) : (
        <SectionList
          sections={days}
          keyExtractor={item => item.dt.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      )}
    </View>
  );
};

export default FiveDaysListForecastBottomSheet;
