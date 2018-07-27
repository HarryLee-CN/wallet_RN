import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {View, Text, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';

class IndexScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wallet_balance: 67.88,
      coins: 364,
      cards_coupons: 6,
      banner: [
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_1.png'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_2.png'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_1.png'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_2.png'
        }
      ],
      modules: [
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/pig.s96bje7u.png',
          text: '理财',
          url: 'https://licai.meitu.com'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/card.s96bje7u.png',
          text: '信用卡'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/novel.s96bje7u.png',
          text: '阅读'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/loan.s96bje7u.png',
          text: '借钱'
        },
        {
          img: 'https://img.app.meitudata.com/c2p/app_store/bucket/dots.s96bje7u.png',
          text: '敬请期待'
        },
      ]
    }
  }

  toAccount() {
    alert('敬请期待！')
  }

  toCardsCoupons() {
    this.props.navigation.navigate('CardsCoupons')
  }

  renderHeader() {
    return (
      <ImageBackground source={require('./img/bg_header.png')} resizeMode={'stretch'} style={styles.header}>
        <View style={styles.wallet_balance}>
          <TouchableWithoutFeedback onPress={() => {
            this.toAccount()
          }}>
            <View style={styles.wallet_balance_title}>
              <Text style={styles.wallet_balance_title_text}>钱包余额</Text>
              <Image style={styles.wallet_balance_arrow} resizeMode={'contain'}
                     source={require('./img/arrow_right.png')}/>
            </View>
          </TouchableWithoutFeedback>
          <Text onPress={() => {
            this.toAccount()
          }} style={styles.wallet_balance_value}>
            {this.state.wallet_balance}
          </Text>
        </View>
        <View style={styles.myCoins_myCoupons}>
          <View style={styles.each_side}>
            <Text onPress={() => {
              this.toAccount()
            }} style={styles.each_side_text}>
              我的金币：<Text style={styles.each_side_text_value}>{this.state.coins}</Text>
            </Text>
          </View>
          <View style={styles.each_side}>
            <Text onPress={() => {
              this.toCardsCoupons()
            }} style={styles.each_side_text}>
              我的卡券：<Text style={styles.each_side_text_value}>{this.state.cards_coupons}</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
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
        }}
      >
        {this.state.banner.map((v, k) => {
          return (
            <TouchableWithoutFeedback key={k} onPress={() => {
              alert('敬请期待！')
            }}>
              <Image resizeMode={'cover'} source={{uri: v.img}} style={{height: 97}}/>
            </TouchableWithoutFeedback>
          )
        })}
      </Carousel>
    )
  }

  renderModules() {
    return (
      <View style={styles.modules}>
        {this.state.modules.map((v, k) => {
          return (
            <TouchableWithoutFeedback key={k} onPress={() => {
              alert('敬请期待！')
            }}>
              <View style={{...styles.modules_content, width: vw / 3}}>
                <Image resizeMode={'contain'} source={{uri: v.img}} style={{width: 29, height: 24}}/>
                <Text style={styles.modules_content_text}>
                  {v.text}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.Index}>
        {this.renderHeader()}
        {this.renderBanner()}
        {this.renderModules()}
      </View>
    )
  }
}

export default IndexScreen