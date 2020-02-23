import mobilityAidReducer from './mobilityAid'
import seatPreferencesReducer from './seatPreferences'
import seatTransferReducer from './seatTransfer'
import needsReducer from './typeOfNeeds'
import mobilityAidStorageReducer from './mobilityAidStorage'

export const combinedReducer = ({ needs, seatPreferences, seatTransfer, mobilityAid, mobilityAidStorage }, action) => ({
  needs: needsReducer(needs, action),
  seatPreferences: seatPreferencesReducer(seatPreferences, action),
  seatTransfer: seatTransferReducer(seatTransfer, action),
  mobilityAid: mobilityAidReducer(mobilityAid, action),
  mobilityAidStorage: mobilityAidStorageReducer(mobilityAidStorage, action),
})