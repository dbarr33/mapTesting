
import React, {
  Component,
  PropTypes
 } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

class MapItem extends Component {
  static propTypes = {
    navigator: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      response: {
        uri: "content://com.google.android.apps.photos.contentprovider/0/1/content%3A%2F%2Fmedia%2Fexternal%2Fimages%2Fmedia%2F49913/ORIGINAL/NONE/1685232586"
      }
    };
  }

  onClick() {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
      skipBackup: true,
      path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        this.setState({
          response,
          uri: 'data:image/jpeg;base64,' + response.data
        })
      }
    });
    // this.props.navigator.push({
    //   screen: 'itemDetails', // unique ID registered with Navigation.registerScreen
    //   title: 'Details', // navigation bar title of the pushed screen (optional)
    //   animated: true, // does the push have transition animation or does it happen immediately (optional)
    // });
  }
  render() {
    console.log(this.state)
    return (
      <TouchableOpacity onPress={this.onClick.bind(this)}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image
              resizeMode="contain"
              source={{uri: 'data:image/jpeg;base64,' + this.state.response.data}}
              style={styles.image}
            />
            <View style={styles.middle}>
              <Text>Name</Text>
              <Text>type</Text>
              <Text>distance</Text>
            </View>
            <Text style={styles.rating}>Rating</Text>
          </View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.description}
          >
            A very long description about this place that you will want to go see but you will need to click to read more about it.
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
  },
  top: {
    flexDirection: 'row',
  },
  middle: {
    justifyContent: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 15
  },
  description: {
    paddingVertical: 5
  },
  rating: {
    flex: 1,
    marginRight: 5,
    textAlign: 'right',
  }
});
export default MapItem;
