export default (
  state = {
    mainTraveller: null,
    adult2: null,
    adult3: null,
    child1: null,
  },
  action,
) => {
  switch (action.type) {
    case 'CHANGE_TRAVELLER_DATA':
      return {
        ...state,
        [action.traveller]: { ...action.data },
      }
    default:
      return state
  }
}
