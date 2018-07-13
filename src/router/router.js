import {createStackNavigator} from 'react-navigation';
import IndexScreen from '../views/index/Index.js'

const RootStack = createStackNavigator({
    Index: {
        screen: IndexScreen
    }
}, {
    initialRouteName: 'Index',
});
export default RootStack