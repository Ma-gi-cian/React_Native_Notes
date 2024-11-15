import { forwardRef } from 'react';
import { Text,View ,TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...touchableProps }, ref) => {
    return (
      <View className = "text-black bg-white rounded-md border-2">
        <Text>{title}</Text>
      </View>
    );
  }
);
