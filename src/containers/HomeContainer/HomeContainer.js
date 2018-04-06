import React, {Component} from 'react'
import { Carousel } from 'antd'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import './css/home_page.css'

function onChange(a, b, c) {
    console.log(a, b, c);
}
class HomeContainer extends Component{
    render() {
        return (
            <div className="home_page">
                <Header></Header>
                <Carousel afterChange={onChange} autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <Footer></Footer>
            </div>
        )
    }
}
export default HomeContainer