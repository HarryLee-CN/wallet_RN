import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {View, Text, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

class CardsCouponsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_example.png'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_example.png'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_example.png'
        },
      ]
    }

  }

  renderBanner() {
    return (
      <Carousel
        style={styles.carousel}
        autoplay
        infinite
        dotStyle={{
          width: 6,
          height: 3,
          borderRadius: 1.5,
          backgroundColor: '#e5e5e5'
        }}
        dotActiveStyle={{
          width: 10,
          height: 3,
          borderRadius: 1.5,
          backgroundColor: '#ff6f6f'
        }}>
        {this.state.banner.map((v, k) => {
          return (
            <TouchableWithoutFeedback key={k} onPress={() => {
              Toast.loading(v.link)
            }}>
              <Image resizeMode={'cover'} source={{uri: v.img}} style={{height: 125}}/>
            </TouchableWithoutFeedback>
          )
        })}
      </Carousel>
    )
  }

  renderEntry() {
    return (
      <View style={styles.entry_container}>
        <View style={{...styles.entry, width: vw * 0.92}}>
          <View style={styles.entry_left}>
            <Image source={require('./img/icon_card.png')} style={{width: 23, height: 19}}/>
            <Text>
              卡包
            </Text>
          </View>
          <View style={styles.entry_right}>
            <Text>
              3
            </Text>
            <Image source={require('./img/arrow_right.png')} style={{width: 9.5, height: 17.5}}/>
          </View>
        </View>
        <View style={{...styles.entry, width: vw * 0.92}}>
          <View style={styles.entry_left}>
            <Image source={require('./img/icon_coupons.png')} style={{width: 23, height: 17.5}}/>
            <Text>
              优惠券
            </Text>
          </View>
          <View style={styles.entry_right}>
            <Text>
              14
            </Text>
            <Image source={require('./img/arrow_right.png')} style={{width: 9.5, height: 17.5}}/>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.cards_coupons}>
        {this.renderBanner()}
        {this.renderEntry()}
      </View>
    )
  }
}

export default CardsCouponsScreen