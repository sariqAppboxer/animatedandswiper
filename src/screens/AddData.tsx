import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/Slice';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

const AddData = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addItem = () => {
    if (text !== '') {
      dispatch(addTodo(text)), setText('');
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.align}>
        <TextInput
          placeholder="Name.."
          placeholderTextColor={'gray'}
          value={text}
          onChangeText={text => setText(text)}
          style={Styles.input}
        />

        <TouchableOpacity
          onPress={() => {
            addItem();
          }}
          style={Styles.touchAdd}>
          <Text style={Styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddData;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  align: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.04,
  },

  input: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  },
  textCom: {
    color: 'white',
    fontWeight: 'bold',
  },
  touchAdd: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.18,
    borderRadius: 6,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
