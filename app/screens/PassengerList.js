import React from 'react'
import {
  Text, Alert, View, Button,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'

import fetchMainTravellerData from '../actions/index'

class PassengerList extends React.Component {
  static navigationOptions = {
    title: "WHO'S TRAVELLING?",
    headerStyle: EStyleSheet.create({
      backgroundColor: () => EStyleSheet.value('$primaryPurple'),
      borderBottomWidth: 0,
    }),
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData('https://functionapp20180527095701.azurewebsites.net/api/GetUserTravellerInfo')
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.mainTraveller.status !== this.props.mainTraveller.status
      && this.props.mainTraveller.status === 'fail'
    ) {
      Alert.alert("We couldn't retrieve data")
    }
  }

  render() {
    return (
      <View>
        <Button title="Start" onPress={() => this.props.navigation.navigate('AddPassengerForm')} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  mainTraveller: state.mainTraveller,
  travellers: state.travellers,
})

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchMainTravellerData(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PassengerList)
