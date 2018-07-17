import React, {Component} from 'react';
import styles from './index.style';
import Dimensions from 'Dimensions';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
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
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_1.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_2.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_1.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/banner_2.png'
          }
        }
      ],
      modules: [
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/licai-new.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/credit-card-new.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/novel.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/loan.png'
          }
        },
        {
          img: {
            uri: 'https://img.app.meitudata.com/c2p/app_store/bucket/to_be_continue.png'
          }
        },
      ]
    }
  }

  toAccount() {
    Toast.loading('toAccount')
  }

  toCardCoupons() {
    Toast.loading('toCardCoupons')
  }

  renderHeader() {
    return (
      <ImageBackground source={require('./img/bg_header.png')} resizeMode={'stretch'} style={styles.header}>
        <View style={styles.wallet_balance}>
          <TouchableOpacity onPress={() => {
            this.toAccount()
          }}>
            <View style={styles.wallet_balance_title}>
              <Text style={styles.wallet_balance_title_text}>钱包余额</Text>
              <Image style={styles.wallet_balance_arrow} resizeMode={'contain'}
                     source={require('./img/arrow_right.png')}/>
            </View>
            <Text style={styles.wallet_balance_value}>
              {this.state.wallet_balance}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.myCoins_myCoupons}>
          <View style={styles.each_side}>
            <TouchableOpacity onPress={() => {
              this.toAccount()
            }}>
              <Text style={styles.each_side_text}>
                我的金币：<Text style={styles.each_side_text_value}>{this.state.coins}</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.each_side}>
            <TouchableOpacity onPress={() => {
              this.toCardCoupons()
            }}>
              <Text style={styles.each_side_text}>
                我的卡券：<Text style={styles.each_side_text_value}>{this.state.cards_coupons}</Text>
              </Text>
            </TouchableOpacity>
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
            <Image key={k} resizeMode={'cover'} source={v.img} style={{width: '100%', height: 97}}/>
          )
        })}
      </Carousel>
    )
  }

  renderModules() {
    let vw = Dimensions.get('window').width;
    let vh = Dimensions.get('window').height;
    console.log(vw,vh);
    let pw = vw/3;
    let ratio = 58/32;
    let ph = pw/ratio;
    console.log(pw,ph);
    return (
      <View style={styles.modules}>
        {this.state.modules.map((v, k) => {
          return (
            <View key={k}>
              <Image source={v.img} style={{width: pw, height: ph}}/>
            </View>
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