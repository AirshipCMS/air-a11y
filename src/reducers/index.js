import mobilityAidReducer from './mobilityAid'
import seatPreferencesReducer from './seatPreferences'
import seatTransferReducer from './seatTransfer'
import needsReducer from './typeOfNeeds'
import mobilityAidStorageReducer from './mobilityAidStorage'

export const combinedReducer = ({ mobilityAid, mobilityAidStorage, seatPreferences, seatTransfer, needs }, action) => ({
  mobilityAid: mobilityAidReducer(mobilityAid, action),
  mobilityAidStorage: mobilityAidStorageReducer(mobilityAidStorage, action),
  seatPreferences: seatPreferencesReducer(seatPreferences, action),
  seatTransfer: seatTransferReducer(seatTransfer, action),
  needs: needsReducer(needs, action)
})