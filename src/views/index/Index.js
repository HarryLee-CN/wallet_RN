import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'antd-mobile-rn';

class IndexScreen extends Component {
  render() {
    return (
      <View>
        <Text>Index Screen</Text>
        <Button onClick={() => {
          alert('Touched!')
        }}>
          Button
        </Button>
      </View>
    )
  }
}

export default IndexScreen