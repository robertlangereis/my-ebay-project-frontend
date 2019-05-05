import request from 'superagent'
// import request from 'sequelize'
export const ADS_FETCHED = 'ADS_FETCHED'
export const AD_FETCHED = 'AD_FETCHED'
export const AD_CREATE_SUCCESS = 'AD_CREATE_SUCCESS'
export const AD_DELETE_SUCCESS = 'AD_DELETE_SUCCESS'
export const AD_UPDATE_SUCCESS = 'AD_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
})

const adFetched = ad => ({
  type: AD_FETCHED,
  ad
})

const adCreateSuccess = ad => ({
  type: AD_CREATE_SUCCESS,
  ad
})

const adDeleteSuccess = ad => ({
  type: AD_DELETE_SUCCESS,
  ad
})

const adUpdateSuccess = ad => ({
  type: AD_UPDATE_SUCCESS,
  ad
})

export const loadAd = (id) => (dispatch, getState) => {
  // when the state already contains ads, we don't fetch them again
  // if (getState().ad) return 
  // ==> I had to kill this, because it was basically saying: if there is already a state (which is the old ad loaded), then don't load the new state
  // const adID = getState().ads.id
  // a GET /ads request
  request(`${baseUrl}/advertisements/${id}`)
    .then(response => {
      if(response.ok){
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(adFetched(response.body.advertisement))
        }
        else{return "there was an error loading the ad"}
      // dispatch an ADS_FETCHED action that contains the ad
    })
    .catch(console.error)
}

export const loadAds = () => (dispatch, getState) => {
  // when the state already contains ads, we don't fetch them again
  if (getState().ads) return
  // const adID = getState().ads.id
  // a GET /ads request
  request(`${baseUrl}/advertisements`)
    .then(response => {
      if(response.ok){
        // console.log(id) 
        dispatch(adsFetched(response.body.advertisement))
      }
        else{return "there was an error"}
      // dispatch an ADS_FETCHED action that contains the ads
    })
    .catch(console.error)
}

export const createAd = data => dispatch => {
  request
    .post(`${baseUrl}/advertisements`)
    .send(data)
    .then(response => {
      dispatch(adCreateSuccess(response.body.advertisement)) 
    })
    .catch(console.error)
    
}

export const deleteAd = id => dispatch => {
  request
    .delete(`${baseUrl}/advertisements/${id}`)
    .then(response => {
      if(response.ok){
      dispatch(adDeleteSuccess(id), console.log(id))
    }
      else{return "there was an error"}
  })
    .catch(console.error)
}

export const updateAd = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/advertisements/${id}` , console.log('response', id))
    .send(data.formValues, "send")
    .then(response => dispatch(adUpdateSuccess(response.body.advertisement)))
    .catch(console.error, "there was an error")
    // if(response.ok){ 
    // }
    // else{return "there was an error"}
    // })
  }