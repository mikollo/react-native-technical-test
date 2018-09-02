import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'
import Traveller from '../components/traveller'
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

  render() {
    const { travellers, navigation } = this.props
    return (
      <View>
        {travellers.mainTraveller && (
          <Traveller
            onPress={() => navigation.navigate('AddPassengerForm', {
              travellerType: 'mainTraveller',
            })
            }
            {...travellers.mainTraveller}
          />
        )}
        {['adult1', 'adult2', 'child1'].map(travellerType => (
          <Traveller
            key={travellerType}
            onPress={() => navigation.navigate('AddPassengerForm', {
              travellerType,
            })
            }
            travellerType={travellerType}
            {...travellers[travellerType]}
          />
        ))}
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchMainTravellerData(url)),
})

export default connect(
  state => state,
  mapDispatchToProps,
)(PassengerList)
