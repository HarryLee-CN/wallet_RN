import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

class CardsScreen extends Component {
  render() {
    return (
      <Text style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        卡包
      </Text>
    )
  }
}

export default CardsScreen