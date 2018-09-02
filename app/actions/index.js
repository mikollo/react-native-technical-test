import { Alert } from 'react-native'

export default function fetchMainTravellerData(url) {
  return async (dispatch) => {
    try {
      let data = await fetch(url)
      data = await data.json()
      dispatch({
        type: 'CHANGE_TRAVELLER_DATA',
        data,
        traveller: 'mainTraveller',
      })
    } catch (e) {
      Alert.alert("Couldn't fetch main traveller's data")
    }
  }
}
