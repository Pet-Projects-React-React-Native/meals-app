import {Platform, StyleSheet} from 'react-native';

export const navigationStyle = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#351401',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: {
    color: '#fff',
  },
  contentStyle: {
    backgroundColor: '#3f2f25',
  },
  headerTitleStyle: {
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: 'Laila-Bold',
      },
      ios: {
        fontFamily: 'Laila-Bold',
        fontWeight: '700',
      },
    }),
  },
});
