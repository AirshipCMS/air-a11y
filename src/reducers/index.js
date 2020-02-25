import mobilityAidReducer from './mobilityAid'
import seatPreferencesReducer from './seatPreferences'
import seatTransferReducer from './seatTransfer'
import needsReducer from './typeOfNeeds'
import mobilityAidStorageReducer from './mobilityAidStorage'
import a11yReducer from './a11yAssistant'

export const combinedReducer = ({ needs, seatPreferences, seatTransfer, mobilityAid, mobilityAidStorage, a11yAssistant }, action) => ({
  needs: needsReducer(needs, action),
  seatPreferences: seatPreferencesReducer(seatPreferences, action),
  seatTransfer: seatTransferReducer(seatTransfer, action),
  mobilityAid: mobilityAidReducer(mobilityAid, action),
  mobilityAidStorage: mobilityAidStorageReducer(mobilityAidStorage, action),
  a11yAssistant: a11yReducer(a11yAssistant, action),
})
