export const initialState = {
  email: "",
  name: "",
  voterId: "",
  party: "",
  voted: false,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        voterId: action.payload.voterId,
      };

    case "VOTED":
      return {
        ...state,
        voted: true,
        party: action.payload.party,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};

export default reducer;
