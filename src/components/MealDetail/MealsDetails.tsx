import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
} from 'react-native';
import IMeal from '../../models/IMeal';

type MealsDetailsProps = Pick<
  IMeal,
  'duration' | 'affordability' | 'complexity'
> & {
  readonly textStyle?: TextStyle;
  readonly style?: ViewStyle;
};

const MealsDetails: FC<MealsDetailsProps> = ({
  duration,
  complexity,
  affordability,
  textStyle,
  style,
}): JSX.Element => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
    color: '#363636',
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontFamily: 'Laila-Medium',
      },
      ios: {
        fontFamily: 'Laila-Medium',
        fontWeight: '500',
      },
    }),
  },
});
