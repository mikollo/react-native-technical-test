import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  doneButtonLabel: { color: 'white', marginRight: 9, fontSize: 17 },
})

const DoneButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.state.params.onDone()}>
    <Text style={styles.doneButtonLabel}>Done</Text>
  </TouchableOpacity>
)

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ADD TRAVELLER',
    headerStyle: EStyleSheet.create({
      backgroundColor: () => EStyleSheet.value('$primaryOrange'),
      borderBottomWidth: 0,
    }),
    headerRight: <DoneButton navigation={navigation} />,
  })

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({ onDone: this.onDone })
  }

  onDone = () => {
    this.props.navigation.goBack()
  }

  render() {
    return <View />
  }
}
