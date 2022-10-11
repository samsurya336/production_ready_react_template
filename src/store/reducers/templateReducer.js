const templateReducer = (
  state = {
    loading: false,
    data: null
  },
  action
) => {
  switch (action.type) {
    case "SET_TEMPLATE_LOADING":
      return {
        ...state,
        loading: action.payload.loading
      };

    case "SET_TEMPLATE_DATA":
      return {
        ...state,
        data: action.payload.data
      };

    case "RESET":
      return {
        loading: false,
        data: null
      };

    default:
      return state;
  }
};
export default templateReducer;
