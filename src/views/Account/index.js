import React, {Component} from 'react';
import styles from './index.style';
import Dimensions from 'Dimensions';

let vw = Dimensions.get('window').width;
import {View, Text, Image, ImageBackground, TouchableWithoutFeedback, RefreshControl, ScrollView} from 'react-native';
import {Toast, Carousel} from 'antd-mobile-rn';
import {ajax} from "../../utils/fetch";

class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet_balance: 258.88,
      coins: 476
    }
  }
  render() {
    return (
      <View style={styles.Account}>
        <View style={styles.amount}>
          <View style={styles.amount_each_side}>
            <View style={styles.amount_each_side_title}>
              <Text>钱包余额</Text>
              {/*<Image source={require('./img/')}/>*/}
            </View>
            <View style={styles.amount_each_side_amount}>
              <Text>{this.state.wallet_balance}</Text>
            </View>
            <View style={styles.amount_each_side_button}>
              {/*<Image/>*/}
              <Text>提现</Text>
            </View>
          </View>
          <View style={styles.amount_each_side}>
            <View style={styles.amount_each_side_title}>
              <Text>我的金币</Text>
              {/*<Image source={require('./img/')}/>*/}
            </View>
            <View style={styles.amount_each_side_amount}>
              <Text>{this.state.coins}</Text>
            </View>
            <View style={styles.amount_each_side_button}>
              {/*<Image/>*/}
              <Text>充值</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

}

export default AccountScreen