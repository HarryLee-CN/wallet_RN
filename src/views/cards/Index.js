import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {Animated, View, Text, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

import Card from '../../components/card/Index'

class CardsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginAnim: new Animated.Value(0),          // 透明度初始值设为0
      cards_list: [{}, {}, {}, {}, {}]
    };
  }

  componentDidMount() {                                 // 开始执行动画
  }

  handleClick() {
    console.log('start', this.state.marginAnim._value);
    if (this.state.marginAnim._value === 0) {
      Animated.spring(                            // 随时间变化而执行的动画类型
        this.state.marginAnim,                      // 动画中的变量值
        {
          toValue: -105,                             // 透明度最终变为1，即完全不透明
          useNativeDriver: false,
          delay: 0,
          duration: 350,
          bounciness: 12,
          onComplete: ({finished}) => {
            console.log('onComplete', finished);
            console.log('end', this.state.marginAnim._value)
          }
        }
      ).start();
    } else {
      Animated.spring(                            // 随时间变化而执行的动画类型
        this.state.marginAnim,                      // 动画中的变量值
        {
          toValue: 0,                             // 透明度最终变为1，即完全不透明
          useNativeDriver: false,
          delay: 0,
          duration: 350,
          bounciness: 12,
          onComplete: ({finished}) => {
            console.log('onComplete', finished);
            console.log(this.state.marginAnim._value)
          }
        }
      ).start();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {
        this.handleClick()
      }}>
        {/*<ScrollView>*/}
        <View style={{
          ...styles.cards,
          width: vw
        }}>
          {this.state.cards_list.map((v, k) => (
            <Animated.View key={k} style={{
              marginTop: k !== 0 && this.state.marginAnim,
            }}>
              <Card style={{
                margin: 2,
                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowColor: '#333333',
                shadowOpacity: 0.5,
                shadowRadius: 1,
                shadowBlur: 5
              }}/>
            </Animated.View>
          ))}
        </View>
        {/*</ScrollView>*/}
      </TouchableWithoutFeedback>
    );
  }
}

export default CardsScreen