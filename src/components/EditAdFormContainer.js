import React from 'react'
import {connect} from 'react-redux'
import {updateAd} from '../actions/ad'
import AdvertisementForm from '../components/advertisement_form/AdvertisementForm'

class EditAdFormContainer extends React.Component {
  state = {
    // formValues: {
    //   title: '',
    //   price: '',
    //   description: '',
    //   address: '',
    //   pickup_possible: '',
    //   phone_nr: '',
    //   picture_url: '',
    //   email: ''
    // }
  }

  onChange = (ad) => {
    // update the formValues property with the new data from the input field
    // console.log(ad.target.title, "ad.target.title")
    // console.log(ad.target.name, "ad.target.name")
    // console.log(this.state, "this state")
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ad.target.name]: ad.target.name.value
      }
    })
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        title: this.props.ad.title,
        price: this.props.ad.price,
        description: this.props.ad.description,
        address: this.props.ad.address,
        pickup_possible: this.props.ad.pickup_possible,
        phone_nr: this.props.ad.phone_nr,
        picture_url: this.props.ad.picture_url,
        email: this.props.ad.email
      }
    })
  }
  
  onSubmit = (ad) => {
    ad.preventDefault()
    this.setState({
      title: '',
      description: '',
      price: '',
      address: '',
      pickup_possible: '',
      phone_nr: '',
      picture_url: '',
      email: ''
    })
    this.props.updateAd(this.props.ad.id, this.state.formValues)
    console.log("onSubmit send. This.props.ad.id" ,this.props.ad.id, "this.state.value", this.state.formValues)
  }

  render() {
    return (<div>
    <h1>Edit this Advertisement</h1>
    <button onClick={ this.onEdit }>Edit Ad</button>
    { this.state.editMode && 
    <AdvertisementForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state.formValues}
    />}
    </div>)
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
  ad: state.ad
})

export default connect(mapStateToProps, {updateAd})(EditAdFormContainer)