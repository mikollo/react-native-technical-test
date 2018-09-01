export default (
  state = {
    status: 'unknown',
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_MAIN_TRAVELLER_DATA_SUCCESS':
      return {
        ...action.data,
        status: 'success',
      }
    case 'FETCH_MAIN_TRAVELLER_DATA_FAILURE':
      return {
        status: 'fail',
      }
    default:
      return state
  }
}
