import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './src/redux/Store';
import {Provider} from 'react-redux';

import MainPage from './src/screens/MainPage';
import AnimatedExample from './src/screens/Example';
import SwipeGesture from './src/screens/Example1';
import Turtle from './src/screens/Example2';
import SwiperDelete from './src/screens/SwipeDelete';
import AddData from './src/screens/AddData';

export type RootStackParamList = {
  MainPage: undefined;
  SwipeGesture: undefined;
  AnimatedExample: undefined;
  Turtle: undefined;
  SwiperDelete: undefined;
  AddData: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="SwipeGesture" component={SwipeGesture} />
          <Stack.Screen name="AnimatedExample" component={AnimatedExample} />
          <Stack.Screen name="Turtle" component={Turtle} />
          <Stack.Screen name="SwiperDelete" component={SwiperDelete} />
          <Stack.Screen name="AddData" component={AddData} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
