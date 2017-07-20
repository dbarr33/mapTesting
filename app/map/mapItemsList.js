
import React, {
  Component,
  PropTypes
} from 'react';
import {
  ListView,
  StyleSheet,
  View
} from 'react-native';

import MapItem from '../map/mapItem';

export default class MapItemsList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  };
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    const count = [];
    for (let i = 0; i < 10; i++) {
      count.push(i);
    }
    const data = ds.cloneWithRows(count);
    return (
      <View>
        <ListView
          contentContainerStyle={styles.list}
          enableEmptySections
          initialListSize={100}
          dataSource={data}
          renderRow={() => (
            <View style={styles.cell}>
              <MapItem navigator={this.props.navigator} />
            </View>
          )
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'lightblue',
    paddingVertical: 6,
  },
  cell: {
    marginHorizontal: 6,
    marginBottom: 6,
  }
});
