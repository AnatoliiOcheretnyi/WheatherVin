import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    height: 250,
  },
  title: {
    fontSize: 32,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  ForecastCloudsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ForecastDetailsContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 30,
  },
  weatherIcon: {
    width: 72,
    height: 72,
  },
});
