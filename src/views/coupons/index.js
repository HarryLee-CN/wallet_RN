import React, {Component} from 'react';
import styles from './index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

class CouponsScreen extends Component {
  render() {
    return (
      <Text>
        优惠券
      </Text>
    )
  }
}

export default CouponsScreen