import { ADS_FETCHED, AD_CREATE_SUCCESS, AD_DELETE_SUCCESS, AD_UPDATE_SUCCESS } from "../actions/ad";


export default function (state = 0, action){
  switch (action.type) {
      case ADS_FETCHED:
        return state = action.ads
      case AD_CREATE_SUCCESS:
        return [...state, action.ad]
      case AD_DELETE_SUCCESS:
      return state.filter(deleteAd => deleteAd.id !== action.ad.text)      
      case AD_UPDATE_SUCCESS:
        console.log(state, "state")
        const newState = state 
          ? state.map(ad => {
            console.log("advertisement test:", ad)
            console.log('action.advertisement test:', action.ad)
            const isEqual = ad.id === action.ad.id
            console.log('isEqual test:', isEqual)
            return isEqual ? action.ad : ad
          })
          : state

        console.log('newState', newState)
        return newState
      default:
        return state
  }
}