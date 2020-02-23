export const initialMobilityAid = {
  name: null,
  width: '',
  height: '',
  length: '',
  weight: '',
  folds: false,
  folded: {
    width: ''
  },
  image: '',
  WCBW: false,
  WCBD: false,
  WCLB: false,
  lithium_number_of_grams: '',
  foldable_back_rest: false,
  removable_leg_rest: false,
  removable_joystick: false,
  cabin_storage: false,
  additional_equipment: '',
  instructions: ''
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
