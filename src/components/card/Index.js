import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {Animated, View, Text, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={this.props.source}
        resizeMode={this.props.resizeMode}
        style={{
        ...this.props.style,
        ...styles.card
      }}>

      </ImageBackground>
    );
  }
}

export default Card