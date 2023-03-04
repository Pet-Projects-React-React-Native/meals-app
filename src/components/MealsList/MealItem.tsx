import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  PressableAndroidRippleConfig,
  ViewStyle,
} from 'react-native';
import IMeal from '../../models/IMeal';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../navigation/types/Screens';
import MealsDetails from '../MealDetail/MealsDetails';
import {screenDetailsNavigationType} from '../../navigation/types/ScreenTypes';

const MealItem: FC<IMeal> = ({
  id,
  title,
  imageUrl,
  complexity,
  duration,
  affordability,
  steps,
  ingredients,
}): JSX.Element => {
  const navigation = useNavigation<screenDetailsNavigationType>();

  const androidRippleConfig: PressableAndroidRippleConfig = {
    color: '#ccc',
    borderless: true,
  };
  const onPressIosHandler = ({
    pressed,
  }: {
    pressed: boolean;
  }): ViewStyle | ViewStyle[] | null =>
    pressed && Platform.OS === 'ios' ? styles.pressed : null;

  const selectMealItemHandler = () =>
    navigation.navigate(Screen.MealDetails, {
      id: id,
      imageUrl: imageUrl,
      steps: steps,
      title: title,
      complexity: complexity,
      affordability: affordability,
      duration: duration,
      ingredients: ingredients,
    });

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={androidRippleConfig}
        onPress={selectMealItemHandler}
        style={onPressIosHandler}>
        <View style={styles.innerContainer}>
          <View>
            <FastImage
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails
            complexity={complexity}
            affordability={affordability}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    margin: 8,
    fontSize: 18,
    color: '#363636',
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
