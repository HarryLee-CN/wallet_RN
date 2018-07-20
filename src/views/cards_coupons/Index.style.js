import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  carousel: {
    height: 125
  },
  entry_container: {
    alignItems: 'center'
  },
  entry: {
    height: 70,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  entry_left: {
    flexDirection: 'row',
  },
  entry_right: {
    flexDirection: 'row',
  }
});
export default styles