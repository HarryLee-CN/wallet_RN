import {createStackNavigator} from 'react-navigation';
import IndexScreen from '../views/index'
import AccountScreen from '../views/account'
import CardsCouponsScreen from '../views/cards_coupons'
import CardsScreen from '../views/cards'
import CouponsScreen from '../views/coupons'

const RootStack = createStackNavigator({
  Index: {
    screen: IndexScreen,
    path: 'index',
    navigationOptions: ({navigation}) => ({
      title: '我的钱包'
    }),
  },
  Account: {
    screen: AccountScreen,
    path: 'account',
    navigationOptions: ({navigation}) => ({
      title: '我的账户'
    }),
  },
  CardsCoupons: {
    screen: CardsCouponsScreen,
    path: 'cards_coupons',
    navigationOptions: ({navigation}) => ({
      title: '我的卡券'
    })
  },
  Cards: {
    screen: CardsScreen,
    path: 'cards',
    navigationOptions: ({navigation}) => ({
      title: '卡包'
    })
  },
  Coupons: {
    screen: CouponsScreen,
    path: 'coupons',
    navigationOptions: ({navigation}) => ({
      title: '优惠券'
    })
  }
}, {
  initialRouteName: 'Index',
});
export default RootStack