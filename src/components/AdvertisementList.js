import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AdvertisementList extends Component {
    renderAds(ad) {    
    return <Link to={`/advertisements/${ad.id}`}>{ad.title}</Link>
    }
 
  render() {
    const { ads } = this.props
    return(
            <div>
              <h1>All Advertisements</h1>
              <div>    
                {ads &&
                <ul>{ads.map(ads =>
                    <li key={ads.id} className="ad">{this.renderAds(ads)}</li>)}
                </ul>
                }
              </div>
              There are currently { ads.length } advertisements.
            </div>)
  }
}