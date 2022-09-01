import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FiveDaysForecast from '../../screens/FiveDaysListForecast';
import SpecifiedDayForecast from '../../screens/SpecifiedDayForecast';
const Stack = createNativeStackNavigator();

export default function (): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'FiveDaysForecastNav'}>
        <Stack.Screen
          options={{
            title: '5 Forecast',
          }}
          name="FiveDaysForecastNav"
          component={FiveDaysForecast}
        />
        <Stack.Screen
          name="SpecifiedDayForecastNav"
          component={SpecifiedDayForecast}
          options={{
            title: 'Choosen day',
            headerBackTitle: 'BACK',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
