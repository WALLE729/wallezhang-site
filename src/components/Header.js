import React, {Component} from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import './css/Header.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component{
    state = {
        current: 'mail',
    }
        handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div>
                 <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/about"> about </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          Navigation One
        </Menu.Item>
      </Menu>
            </div>
        )
    }
}
export default Header