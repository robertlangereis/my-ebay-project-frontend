import React from 'react'
import {connect} from 'react-redux'
import {loadAds} from '../actions/ad'
import AdvertisementList from './AdvertisementList'
import AdvertisementFormContainer from './advertisement_form/AdvertisementFormFormContainer'

class AdvertisementListContainer extends React.Component {
  componentDidMount() {
    // console.log('AdvertisementListContainer componentDidMount test!')
    this.props.loadAds()
  }

  render() {
    if (this.props.ads){
    return<div> 
      <AdvertisementList ads={this.props.ads}/> 
      {/* {console.log(this.props.ads)} */}
      <h1>Create a New Advertisement</h1>
      <AdvertisementFormContainer/></div>}
    else return 'Loading ads...'
}
    
}

const mapStateToProps = state => ({
  ads: state.ads,
})

export default connect(mapStateToProps, {loadAds})(AdvertisementListContainer)