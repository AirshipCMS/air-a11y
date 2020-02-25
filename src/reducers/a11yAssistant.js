export const initialA11yAssistant = {
  selections: [],
  navigation: {
    back: () => {},
    next: () => {},
  },
};

const a11yReducer = (state, action) => {
  switch (action.type) {
    case 'A11Y_SELECTIONS':
      return {
        ...state,
        selections: action.selections
      };

    case 'A11Y_NAVIGATION':
      return {
        ...state,
        navigation: action.speechNavigation
      };

    default:
      return state;
  }
}

export default a11yReducer
