import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homeStateAsync } from './../../redux/home.redux'
import HomeCarousel from './component/HomeCarousel'
import HomeList from './component/HomeList'
import HeaderCom from './../../components/Header'
import FooterCom from './../../components/Footer'

import './css/home_page.css'

@connect(state => state.HomeRedux, { homeStateAsync })
class HomeContainer extends Component {
  render() {
    return (
      <div className="home_page">
        <HeaderCom />

        <HomeCarousel />
        <HomeList />

        <h2>234234324{this.props.data}299</h2>
        <h1 onClick={this.props.homeStateAsync}>click</h1>
        <h2>{}</h2>
        <FooterCom />
      </div>
    )
  }
}
export default HomeContainer
