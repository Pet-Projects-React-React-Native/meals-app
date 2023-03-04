import React, {FC} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

type ListProps = {
  readonly listData: string[];
};

const List: FC<ListProps> = ({listData}): JSX.Element => {
  return (
    <>
      {listData.map((text, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.itemText}>{text}</Text>
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    fontSize: 15,
    alignItems: 'center',
    color: '#351401',
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
