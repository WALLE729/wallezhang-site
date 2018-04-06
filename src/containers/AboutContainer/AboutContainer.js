import React, {Component} from 'react'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import './css/about_container.css'
class AboutContainer extends Component{
    render() {
        return (
            <div className="about_container_page">
                <Header></Header>
                <div className="about_container_main">
                    <h1>About me ?</h1>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default AboutContainer