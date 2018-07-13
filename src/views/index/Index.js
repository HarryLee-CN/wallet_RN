import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class IndexScreen extends Component {
    render() {
        return (
            <View>
                <Text>Index Screen</Text>
                <Button title={'Button'} onPress={()=>{alert('Touched!')}}/>
            </View>
        )
    }
}
export default IndexScreen