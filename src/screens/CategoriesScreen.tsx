import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const CategoriesScreen: FC = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.screen}>
      <CategoriesList />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
