import React, { Component } from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import Logo from './../assets/img/robot.svg'
import './css/Header.css'
const { SubMenu } = Menu
const { Header } = Layout

class HeaderCom extends Component {
  render() {
    return (
      <div className="header_box">
        <Header className="header">
          <Row>
            <Col span={12}>
              <span className="logo_box">
                <Link to="/">
                  <img width="40" src={Logo} alt="logo" />
                  <span className="logo_text">WALLE</span>
                </Link>
              </span>
            </Col>
            <Col span={12}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="home">
                  <span>
                    <Link to="/"> Home </Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="about">
                  <span>
                    <Link to="/about"> about </Link>
                  </span>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </div>
    )
  }
}
export default HeaderCom
