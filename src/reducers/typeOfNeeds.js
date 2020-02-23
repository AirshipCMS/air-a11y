export const initialNeeds = {
  WCHC: false,
  BLIND: false,
  DEAF: false
};

const needsReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_NEEDS':
      return {
        ...state,
        ...action.form_field
      };

    default:
      return state;
  }
}

export default needsReducer
