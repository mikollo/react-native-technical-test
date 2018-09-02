import React from 'react'
import {
  Text, View, Alert, TouchableOpacity,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../components/input'
import camelCaseToNormalText from '../utils/camelCaseToNormalText'

const styles = EStyleSheet.create({
  doneButtonLabel: {
    color: 'white',
    marginRight: 9,
    fontSize: () => EStyleSheet.value('$defaultFontSize'),
  },
})

const DoneButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.state.params.onDone()}>
    <Text style={styles.doneButtonLabel}>Done</Text>
  </TouchableOpacity>
)

DoneButton.propTypes = {
  navigation: PropTypes.object,
}

class AddPassengerForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ENTER TRAVELLER',
    headerStyle: EStyleSheet.create({
      backgroundColor: () => EStyleSheet.value('$primaryOrange'),
      borderBottomWidth: 0,
    }),
    headerRight: <DoneButton navigation={navigation} />,
  })

  static propTypes = {
    navigation: PropTypes.object,
    addTraveller: PropTypes.func,
    travellers: PropTypes.object,
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({ onDone: this.onDone })
  }

  onDone = () => {
    const { navigation, addTraveller } = this.props
    const {
      title, firstName, lastName, dateOfBirth,
    } = this
    if (title && firstName && lastName && dateOfBirth) {
      addTraveller(
        {
          title,
          firstName,
          lastName,
          dateOfBirth,
        },
        navigation.state.params.travellerType,
      )
      navigation.goBack()
    } else {
      Alert.alert('Please fill whole form')
    }
  }

  render() {
    const { travellers, navigation } = this.props
    return (
      <View
        style={{
          marginVertical: EStyleSheet.value('$defaultPaddingHalf'),
        }}
      >
        {['title', 'firstName', 'lastName', 'dateOfBirth'].map(dataType => (
          <Input
            defaultValue={
              travellers[navigation.state.params.travellerType]
              && travellers[navigation.state.params.travellerType][dataType]
            }
            key={dataType}
            placeholder={camelCaseToNormalText(dataType)}
            onChangeText={(text) => {
              this[dataType] = text
            }}
          />
        ))}
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTraveller: (data, traveller) => dispatch({
    type: 'CHANGE_TRAVELLER_DATA',
    data,
    traveller,
  }),
})

export default connect(
  state => state,
  mapDispatchToProps,
)(AddPassengerForm)
