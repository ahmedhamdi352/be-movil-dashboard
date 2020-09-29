import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import InstallContent from './installContent'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
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

  render() {
    return (
      <Layout style={{height:"100vh"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>this.handelClick('Adds')}>
               Adds
            </Menu.Item>
            {/* <Menu.Item key="2" icon={<VideoCameraOutlined /> } onClick={()=>this.handelClick('Url')}>
             Url
            </Menu.Item> */}
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=>this.handelClick('Install')}>
             No Of Instaalls
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
            <InstallContent history={this.props.history}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo