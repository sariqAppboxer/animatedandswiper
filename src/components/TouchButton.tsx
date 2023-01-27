import React from 'react';
import {Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {height: windieHeight, width: windowWidth} = Dimensions.get('window');

type propType = {
  name: string;
  navPage: never;
};

const TouchButton = (props: propType) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(props.navPage)}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default TouchButton;

const styles = StyleSheet.create({
  container: {
    height: windieHeight * 0.06,
    width: windowWidth * 0.7,
    borderRadius: 6,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
