import { AD_FETCHED, AD_UPDATE_SUCCESS } from "../actions/ad";

export default function (state = 0, action) {
  switch (action.type) {
      case AD_FETCHED:
        return state = action.ad
      case AD_UPDATE_SUCCESS:
        const newState = state 
        ? [state].map(ad => {
          console.log("advertisement test:", ad)
          const isEqual = ad.id === action.ad.id
          return isEqual ? action.ad : ad
          // console.log('action.advertisement test:', action.ad)
          
          // console.log('isEqual test:', isEqual)
        })
        : state
        console.log('newState', newState)
        return newState
      default:
        return state
  }
}