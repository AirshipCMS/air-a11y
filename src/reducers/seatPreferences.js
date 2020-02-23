export const initialSeatPreferences = {
  movable_arm_rests: false,
  accessible_buttons: false,
  aisle_seat: null,
  bathroom_seat: null,
  front_row_seat: null
};

const seatPreferencesReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_SEAT_PREFERENCE':
      return {
        ...state,
        ...action.form_field
      };

    default:
      return state;
  }
}

export default seatPreferencesReducer
