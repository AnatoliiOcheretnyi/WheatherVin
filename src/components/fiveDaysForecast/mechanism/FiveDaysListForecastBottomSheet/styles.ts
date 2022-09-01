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
  header: {
    fontSize: 20,
    alignSelf: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
});
