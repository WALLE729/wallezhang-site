import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './../css/home_list.css'

class HomeList extends Component {
  render() {
    return (
      <div className="home_list_box">
        <div className="gutter-example ">
          <Row gutter={24}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default HomeList
