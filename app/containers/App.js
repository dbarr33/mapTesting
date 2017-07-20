
import { Component } from 'react';
import {
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Map from '../map/map';
import MapItemsList from '../map/mapItemsList';
import ItemDetails from '../map/itemDetails';

export default class App extends Component {
  render() {
    return null;
  }
}
Navigation.registerComponent('mapScreen', () => Map);
Navigation.registerComponent('mapItemsList', () => MapItemsList);
Navigation.registerComponent('itemDetails', () => ItemDetails);
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Map', // tab label as appears under the icon in iOS (optional)
      screen: 'mapScreen', // unique ID registered with Navigation.registerScreen
      title: 'Screen One', // title of the screen as appears in the nav bar (optional)
      icon: require('../img/map.png'), // local image asset for the tab icon unselected state (optional on iOS)
      navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
      navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
    },
    {
      label: 'List',
      screen: 'mapItemsList',
      icon: require('../img/map.png'), // local image asset for the tab icon unselected state (optional on iOS)
      title: 'Screen Two'
    }
  ],

  appStyle: {
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
