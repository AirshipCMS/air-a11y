export const initialMobilityAidStorage = {
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

const mobilityAidStorageReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_MOBILITY_AID_STORAGE':
      return {
        ...state,
        ...action.form_field
      };

    default:
      return state;
  }
}

export default mobilityAidStorageReducer
