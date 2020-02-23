export const initialMobilityAid = {
  name: '',
  width: '',
  height: '',
  length: '',
  weight: '',
  folds: false,
  folded: {
    width: ''
  },
  image: ''
};

const mobilityAidReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_MOBILITY_AID':
      return {
        ...state,
        ...action.form_field
      };

    default:
      return state;
  }
}

export default mobilityAidReducer
