import React, {
    Component
} from 'react'
import {Link,Route} from "react-router-dom"; 
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Etable from '../Etable/Etable'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Notice extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'千峰教育',
        }
    }
    render(){
        return (
            <div>
            
           <Layout>
    <Header >
      <div className="logo"  />
     
      <Menu
       theme="dark"
        mode="horizontal"
          defaultSelectedKeys={['2']}
         style={{ lineHeight: '64px' }}>
                       
                       {
      ['首页','我的','设置'].map((item,index)=>{
      return (<Menu.Item key={index}>{item}</Menu.Item>)})
                       }
                    </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
         { [{
            key:'sub1',
            title: <span>
            <Icon type="user" />
          学员后台
          </span>,
          options:[{name:'匿名投诉',
                    ads:'/niming/1'},
                    {name:'技术问题',
                      ads:'/Vip'},
                      {name:'项目上传',
                      ads:'/xiangmu'},
                      {name:'Vip',
                      ads:'/Vip'}],
          },
          {
            key:'sub2',
            title: <span>
            <Icon type="laptop" />
           学员考勤
          </span>,
          
          options:[{name:'匿名投诉',
          ads:'/niming'},
          {name:'匿名投诉',
            ads:'/niming'},
            {name:'匿名投诉',
            ads:'/niming'},
            {name:'匿名投诉',
            ads:'/niming'}],
          }].map((item)=>{
            return <SubMenu
            key={item.key}
            title={item.title}
          >
            {
              item.options.map((item,index)=>{
               return  <Menu.Item key={index}> 
            <Link to={item.ads}>{item.name}</Link> 
               </Menu.Item>
              })
            }
          </SubMenu>
          })}


          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
              学员后台
              </span>
            }
          >
            <Menu.Item key="1">匿名投诉</Menu.Item>
            <Menu.Item key="2">技术问题</Menu.Item>
            <Menu.Item key="3">项目上传</Menu.Item>
            <Menu.Item key="4">VIP</Menu.Item>
            <Menu.Item key="5">学院周报</Menu.Item>
            <Menu.Item key="6">我的资料</Menu.Item>
            <Menu.Item key="7">交费明细</Menu.Item>
            <Menu.Item key="8">参加考试</Menu.Item>
            <Menu.Item key="9">学员评价</Menu.Item>
            <Menu.Item key="10">教学测评</Menu.Item>

          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
               学员考勤
              </span>
            }
          >
            <Menu.Item key="11">option5</Menu.Item>
            <Menu.Item key="12">option6</Menu.Item>
            <Menu.Item key="13">option7</Menu.Item>
            <Menu.Item key="14">option8</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      
      
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {/* 右边内容 */}
          <Etable/>
        </Content>
      </Layout>
    </Layout>
  </Layout>,
          </div>
        )
    }
}

export default Notice