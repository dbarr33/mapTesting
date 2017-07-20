
import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';


export default class ItemDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../img/fuzz.png')}
          style={styles.image}
        />
        <Text>Name</Text>
        <Text>type</Text>
        <Text>distance</Text>
        <Text>Rating</Text>
        <Text
          style={styles.description}
        >
          A very long description about this place that you will want to go see but you will need to click to read more about it.
          A very long description about this place that you will want to go see but you will need to click to read more about it.
          A very long description about this place that you will want to go see but you will need to click to read more about it.

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flex: 1,

  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 15
  },
  description: {
    paddingVertical: 5
  },
});
