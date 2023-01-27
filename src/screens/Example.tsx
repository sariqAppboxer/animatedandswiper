import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const {height: windieHeight, width: windowWidth} = Dimensions.get('window');

const AnimatedExample = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezierFn(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.changeStyle, style]} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}>
        <Text>Change size</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003153',
  },
  button: {
    height: windieHeight * 0.06,
    width: windowWidth * 0.7,
    borderRadius: 6,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  changeStyle: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30,
  },
});
