import React, {Component} from 'react';
import styles from './index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {Animated, View, Text, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

import Card from '../../components/card'

class CardsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginAnim: new Animated.Value(-105), // 透明度初始值设为0
      isCollapsed: true,
      cards_list: [{}, {}, {}, {}, {}, {}]
    };
  }

  componentDidMount() {

  }

  toCollapse() {
    Animated.spring(// 随时间变化而执行的动画类型
      this.state.marginAnim,// 动画中的变量值
      {
        toValue: -105,// 透明度最终变为1，即完全不透明
        useNativeDriver: false,
        delay: 0,
        duration: 350,
        bounciness: 12,
        onComplete: ({finished}) => {
          console.log('onComplete', finished);
        }
      }
    ).start();
  }

  unCollapse() {
    Animated.spring(// 随时间变化而执行的动画类型
      this.state.marginAnim,// 动画中的变量值
      {
        toValue: 0,// 透明度最终变为1，即完全不透明
        useNativeDriver: false,
        delay: 0,
        duration: 350,
        bounciness: 12,
        onComplete: ({finished}) => {
          console.log('onComplete', finished);
        }
      }
    ).start();// 开始执行动画
  }

  handleClick() {
    /**是否为折叠态**/
    if (this.state.isCollapsed) {
      this.setState({
        isCollapsed: false
      });
      this.unCollapse();
    } else {
      this.setState({
        isCollapsed: true
      });
      this.toCollapse()
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{
        ...styles.cards,
        // width: vw
      }}>
        {this.state.cards_list.map((v, k) => (
          <TouchableWithoutFeedback key={k} onPress={() => {
            this.handleClick()
          }}>
            <Animated.View style={{
              marginTop: k !== 0 && this.state.marginAnim,
            }}>
              <Card
                source={
                  k % 3 === 0 ? require('./img/bg_card1.png') :
                    k % 3 === 1 ? require('./img/bg_card2.png') :
                      k % 3 === 2 ? require('./img/bg_card3.png') :
                        ''}
                resizeMode={'cover'}
                style={{
                  margin: 3,
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
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    );
  }
}

export default CardsScreen