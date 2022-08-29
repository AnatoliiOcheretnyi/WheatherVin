import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  sectionContainer: {
    paddingBottom: Platform.OS === 'ios' ? 260 : 0,
    paddingTop: 0,
    paddingHorizontal: 24,
  },
  paddingTop: {
    paddingTop: Platform.OS === 'ios' ? 150 : 490,
  },
  item: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#AFB4FF',
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
  },
  temperature: {
    fontSize: 12,
  },
  weatherIcon: {
    width: 40,
    height: 40,
  },
  weatherDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
});
