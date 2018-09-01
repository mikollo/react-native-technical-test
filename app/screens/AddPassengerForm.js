import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'

const styles = EStyleSheet.create({
  doneButtonLabel: { color: 'white', marginRight: 9, fontSize: 17 },
})

const DoneButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.state.params.onDone()}>
    <Text style={styles.doneButtonLabel}>Done</Text>
  </TouchableOpacity>
)

class AddPassengerForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ENTER TRAVELLER',
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
    this.props.addTraveller({
      title: 'Mr',
      firstName: 'Elvigde',
      lastName: 'Doxey',
      dateOfBirth: '1985-01-20',
      passportId: 'A123132123',
      nationality: 'GB',
    })
  }

  render() {
    return <View />
  }
}

const mapDispatchToProps = dispatch => ({
  addTraveller: travellerData => dispatch({
    type: 'ADD_TRAVELLER',
    travellerData,
  }),
})

export default connect(
  null,
  mapDispatchToProps,
)(AddPassengerForm)
