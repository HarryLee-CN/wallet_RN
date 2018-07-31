import {createStackNavigator} from 'react-navigation';
import IndexScreen from '../views/Index'
import AccountScreen from '../views/Account'
import CardsCouponsScreen from '../views/Cards_Coupons'
import CardsScreen from '../views/Cards'
import CouponsScreen from '../views/Coupons'

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