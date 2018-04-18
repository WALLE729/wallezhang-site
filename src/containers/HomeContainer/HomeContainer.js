import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homeStateAsync } from './../../redux/home.redux'
import HomeCarousel from './component/HomeCarousel'
import HomeList from './component/HomeList'
import HeaderCom from './../../components/Header'
import FooterCom from './../../components/Footer'

import './css/home_page.css'

@connect(state => ({ num: state }), { homeStateAsync })
class HomeContainer extends Component {
  render() {
    return (
      <div className="home_page">
        <HeaderCom />
        <HomeCarousel />
        <HomeList />
        <FooterCom />
      </div>
    )
  }
}
export default HomeContainer
