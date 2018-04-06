import React, {Component} from 'react'
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Logo from './../assets/img/robot.svg'
import './css/Header.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component{
    render() {
        return (
            <div className="header_box">
             <Row>
                <Col span={12}>
                    <span className="logo_box">
                        <Link to="/">
                            <img width='40' src={ Logo } alt="logo" />
                            <span className="logo_text">WALLE</span>
                        </Link> 
                    </span>
                </Col>
                <Col span={12}>
                    <Menu mode="horizontal">
                        <Menu.Item key="mail">
                        <Link to="/"> Home </Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                        <Link to="/about"> about </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
                
            </div>
        )
    }
}
export default Header