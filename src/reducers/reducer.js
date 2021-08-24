export const initialState = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  users: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'usercreated':
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}

export default reducer;