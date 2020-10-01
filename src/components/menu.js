import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Adds from './Adds'
import Plan from './plan'
import { Layout, Menu } from 'antd';
import { connect } from "react-redux";
import UserActionsTypes from "../redux/user/user.types"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    renderOption:'Adds'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handelClick=(name)=>{
      if(name=='Adds'){
          this.props.history.push('/')
      }
      if(name=='Url'){
        this.props.history.push('/url')
    }
    if(name=='Install'){
        this.props.history.push('/install')
    }
    
     
  }
  logout=()=>{
    localStorage.removeItem('tk');
    this.props.history.push('/')
    this.props.setCurrentUser(null)
}

  render() {
    return (
      <Layout style={{height:"100vh"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>this.handelClick('Adds')}>
               Users
            </Menu.Item>

            <Menu.Item key="1" icon={<LogoutOutlined />} onClick={()=>this.logout()}
            style={{position:'absolute',bottom:0,backgroundColor:'red'}}
            
            >
               Log Out
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style:{
                  backgroundColor:'#ffff',
                  padding:'10px',
                  margin:'5px'
              },
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Adds history={this.props.history}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const dispatchToProps = (dispatch) => ({
  setCurrentUser:(payload)=>{
    dispatch({
      type:UserActionsTypes.SET_CURRENT_USER,
      payload
    })
  }
  });
  
  export default connect(null, dispatchToProps)(SiderDemo);

