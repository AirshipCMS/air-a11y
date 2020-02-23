import mobilityAidReducer from './mobilityAid'
import seatPreferencesReducer from './seatPreferences'
import seatTransferReducer from './seatTransfer'
import needsReducer from './typeOfNeeds'

export const combinedReducer = ({ mobilityAid, seatPreferences, seatTransfer, needs }, action) => ({
  mobilityAid: mobilityAidReducer(mobilityAid, action),
  seatPreferences: seatPreferencesReducer(seatPreferences, action),
  seatTransfer: seatTransferReducer(seatTransfer, action),
  needs: needsReducer(needs, action)
})