export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRAVELLER':
      return [...state, action.travellerData]
    default:
      return state
  }
}
