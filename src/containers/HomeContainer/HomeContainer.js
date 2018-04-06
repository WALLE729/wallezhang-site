import React, {Component} from 'react'
import HomeCarousel from './component/HomeCarousel'
import HomeList from './component/HomeList'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import './css/home_page.css'


class HomeContainer extends Component{
    render() {
        return (
            <div className="home_page">
                <Header></Header>
                <HomeCarousel></HomeCarousel>
                <HomeList></HomeList>
                <Footer></Footer>
            </div>
        )
    }
}
export default HomeContainer