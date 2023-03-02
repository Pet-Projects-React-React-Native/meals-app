import React, {FC} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

type Subtitle = {
  readonly title: string;
};

const Subtitle: FC<Subtitle> = ({title}): JSX.Element => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.sutTitle}>{title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#e2bf97',
  },
  sutTitle: {
    margin: 6,
    color: '#e2bf97',
    fontSize: 18,
    textAlign: 'center',
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
