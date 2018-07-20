import {createStackNavigator} from 'react-navigation';
import IndexScreen from '../views/index/Index'
import CardsCouponsScreen from '../views/cards_coupons/Index'

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
  }
}, {
  initialRouteName: 'CardsCoupons',
});
export default RootStack