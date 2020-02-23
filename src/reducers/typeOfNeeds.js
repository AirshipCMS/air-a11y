export const initialNeeds = {
  WCHC: true,
  BLIND: true,
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
