import {createStackNavigator} from 'react-navigation';
import IndexScreen from '../views/index/Index.js'

const RootStack = createStackNavigator({
  Index: {
    screen: IndexScreen,
    path: 'index',
    navigationOptions: ({navigation}) => ({
      title: '我的钱包'
    }),
  }
}, {
  initialRouteName: 'Index',
});
export default RootStack