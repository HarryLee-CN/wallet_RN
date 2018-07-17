import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  Index: {
    flex: 1,
  },
  header: {
    height: 175,
  },
  wallet_balance: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wallet_balance_title: {
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wallet_balance_title_text: {
    fontSize: 14,
    color: '#fff',
  },
  wallet_balance_arrow: {
    width: 6,
    height: 11.5,
    marginLeft: 10
  },
  wallet_balance_value: {
    marginTop: 5,
    fontSize: 40,
    color: '#fff',
  },
  myCoins_myCoupons: {
    height: 55,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.25)',
    borderStyle: 'solid',
  },
  each_side: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  each_side_text: {
    fontSize: 14,
    color: '#fff'
  },
  each_side_text_value: {
    fontSize: 20,
    color: '#fff',
  },


  carousel: {
    height: 97,
  },


  modules: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
export default styles