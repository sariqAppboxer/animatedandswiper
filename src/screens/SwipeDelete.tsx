import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/Slice';

const {height: windieHeight, width: windowWidth} = Dimensions.get('window');

const SwiperDelete = () => {


  const dispatch = useDispatch();
  const todo = useSelector((state: any) => state.todoSlice);
  const refsArray = useRef([0]);


 

  const ListItem = ({item}:any) => {
    const rightSwipeActions = (index:number) => {
      return (
        <TouchableOpacity
          onPress={() => {
            {/* @ts-ignore */}
            refsArray[item.index].close(),
              setTimeout(() => {
                dispatch(deleteTodo(index));
              }, 280);
          }}
          style={styles.deleteView}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      );
    };
    return (
      <Swipeable
        ref={ref => {
          {/* @ts-ignore */}
          refsArray[item.index] = ref;
        }}
        renderRightActions={() => rightSwipeActions(item.index)}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>{item.item}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>List of GitHub Users</Text>
      </View>
      <FlatList
        data={todo}
        keyExtractor={(item: any, index: any) => index}
        renderItem={item => {
          return (
            <View style={styles.listBackground}>
              <ListItem item={item} />
            </View>
          );
        }}
      />
    </GestureHandlerRootView>
  );
};

export default SwiperDelete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#234F1E',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    height: windieHeight * 0.08,
    width: windowWidth * 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windieHeight * 0.02,
  },
  listContainer: {
    height: windieHeight * 0.09,
    width: windowWidth * 0.95,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 1,
  },
  listText: {
    color: 'black',
    fontSize: 16,
  },
  deleteView: {
    height: windieHeight * 0.08,
    width: windowWidth * 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  listBackground: {
    height: windieHeight * 0.098,
    width: windowWidth * 0.965,
    backgroundColor: 'black',
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


