import React, {FC} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type IconButtonProps = {
  readonly name: string;
  readonly size: number;
  readonly color: string;
  readonly onPress: () => void;
};

const IconButton: FC<IconButtonProps> = ({
  color,
  name,
  size,
  onPress,
}): JSX.Element => {
  const onPressHandler = ({pressed}: {pressed: boolean}): ViewStyle | null =>
    pressed ? styles.pressed : null;

  return (
    <Pressable onPress={onPress} style={onPressHandler}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
