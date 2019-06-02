import { ADS_FETCHED, AD_CREATE_SUCCESS, AD_DELETE_SUCCESS } from "../actions/ad";

export default function (state = 0, action){
  switch (action.type) {
      case ADS_FETCHED:  
        return state = action.ads
      case AD_CREATE_SUCCESS:
        return [...state, action.ad]
      case AD_DELETE_SUCCESS:
        return state.filter(deleteAd => deleteAd.id !== action.ad.text)
      default:
        return state
  }
}