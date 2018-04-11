import React, { Component } from 'react'
import { Carousel } from 'antd'
import './../css/home_carousel.css'
import walle1 from './../../../assets/img/walle1.jpg'
import walle2 from './../../../assets/img/walle2.jpg'
import walle3 from './../../../assets/img/walle3.jpg'
import walle4 from './../../../assets/img/walle4.jpg'
function onChange(a, b, c) {
  console.log(a, b, c)
}
class HomeCarousel extends Component {
  render() {
    return (
      <div className="home_banner_box">
        <Carousel afterChange={onChange} autoplay>
          <div>
            <img width="100%" height="auto" src={walle1} alt="banner" />
          </div>
          <div>
            <img width="100%" height="auto" src={walle2} alt="banner" />
          </div>
          <div>
            <img width="100%" height="auto" src={walle3} alt="banner" />
          </div>
          <div>
            <img width="100%" height="auto" src={walle4} alt="banner" />
          </div>
        </Carousel>
      </div>
    )
  }
}
export default HomeCarousel
