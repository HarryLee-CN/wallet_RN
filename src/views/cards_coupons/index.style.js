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
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  entry_right: {
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  entry_text: {
    color: '#333',
    fontSize: 17,
    marginLeft: 15,
    marginRight: 15
  }
});
export default styles