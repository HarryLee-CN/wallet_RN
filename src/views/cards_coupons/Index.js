import React, {Component} from 'react';
import styles from './Index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
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
            <TouchableOpacity key={k} onPress={() => {
              Toast.loading(v.link)
            }}>
              <Image resizeMode={'cover'} source={{uri: v.img}} style={{height: 125}}/>
            </TouchableOpacity>
          )
        })}
      </Carousel>
    )
  }

  renderEntry() {
    return (
      <View style={styles.entry_container}>
          <View style={{...styles.entry, width: vw * 0.92}}>
            <TouchableOpacity>

            </TouchableOpacity>
          </View>
          <View style={{...styles.entry, width: vw * 0.92}}>
            <TouchableOpacity>

            </TouchableOpacity>
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