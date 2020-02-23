export const initialSeatTransfer = {
  aisle_chair: false,
  seat_assistance: false,
  request_wheelhcair: false,
  transportation_assistance: false
};

const seatTransferReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_SEAT_TRANSFER':
      return {
        ...state,
        ...action.form_field
      };

    default:
      return state;
  }
}

export default seatTransferReducer
