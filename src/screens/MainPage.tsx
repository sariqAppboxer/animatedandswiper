import React from 'react';
import {View, StyleSheet} from 'react-native';
import TouchButton from '../components/TouchButton';

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <TouchButton name="Swipe Gesture" navPage="SwipeGesture" />
      {/* @ts-ignore */}
      <TouchButton name="Animated Example" navPage="AnimatedExample" />
      {/* @ts-ignore */}
      <TouchButton name="Turtle" navPage="Turtle" />
      {/* @ts-ignore */}
      <TouchButton name="Swiper Delete" navPage="SwiperDelete" />
      {/* @ts-ignore */}
      <TouchButton name="Add Data" navPage="AddData" />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
