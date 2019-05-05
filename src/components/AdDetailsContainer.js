import React from 'react'
import {connect} from 'react-redux'
import AdDetails from './AdDetails'
import {loadAd, deleteAd} from '../actions/ad'

class AdDetailsContainer extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    address: '',
    pickup_possible: '',
    phone_nr: '',
    picture_url: '',
    email: '',
  }
  
  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteAd(this.props.ad.id)
    this.props.history.push('/')
  }

  
  
  render() {
    return (<div><AdDetails
      onDelete={this.onDelete}
      ad={this.props.ad}
      values={this.state}
    /><br></br>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  ad: state.ad,
  ads: state.ads
})

export default connect(mapStateToProps, {loadAd, deleteAd})(AdDetailsContainer)