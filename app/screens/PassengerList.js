import React from 'react'
import {
  Text, StatusBar, View, Button,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default class extends React.Component {
  static navigationOptions = {
    title: "WHO'S TRAVELLING?",
    headerStyle: EStyleSheet.create({
      backgroundColor: () => EStyleSheet.value('$primaryPurple'),
      borderBottomWidth: 0,
    }),
  }

  render() {
    return (
      <View>
        <Button title="Start" onPress={() => this.props.navigation.navigate('AddPassengerForm')} />
      </View>
    )
  }
}
