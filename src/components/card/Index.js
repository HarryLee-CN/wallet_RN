import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {Animated, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{
        ...this.props.style,
        ...styles.card
      }}>

      </View>
    );
  }
}

export default Card