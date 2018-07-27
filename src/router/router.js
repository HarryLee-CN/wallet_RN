import {createStackNavigator} from 'react-navigation';
import IndexScreen from '../views/index/Index'
import CardsCouponsScreen from '../views/cards_coupons/Index'
import CardsScreen from '../views/cards/Index'
import CouponsScreen from '../views/coupons/Index'

const RootStack = createStackNavigator({
  Index: {
    screen: IndexScreen,
    path: 'index',
    navigationOptions: ({navigation}) => ({
      title: '我的钱包'
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
  initialRouteName: 'Cards',
});
export default RootStack