import { createStackNavigator } from 'react-navigation'

import PassengerList from '../screens/PassengerList'
import AddPassengerForm from '../screens/AddPassengerForm'

const navigationOptions = {
  headerTintColor: 'white',
  headerBackTitle: null,
}

export default createStackNavigator(
  {
    PassengerList: {
      screen: PassengerList,
      navigationOptions,
    },
    AddPassengerForm: {
      screen: AddPassengerForm,
      navigationOptions,
    },
  },
  {
    headerMode: 'screen',
    headerBackTitleVisible: false,
  },
)
