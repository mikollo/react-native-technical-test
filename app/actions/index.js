export default function fetchMainTravellerData(url) {
  return async (dispatch) => {
    try {
      let data = await fetch(url)
      data = await data.json()
      dispatch({
        type: 'FETCH_MAIN_TRAVELLER_DATA_SUCCESS',
        data,
      })
    } catch (e) {
      dispatch({
        type: 'FETCH_MAIN_TRAVELLER_DATA_FAILURE',
      })
    }
  }
}
