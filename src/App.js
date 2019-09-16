import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from "react-mdl";
import NavBar from './components/NavBar.js'
import {Link} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-class" >
            <Navigation  >
                <Link to="/jobs">Jobs</Link>
                <Link to="/inbox">Inbox</Link>
                <Link to="/calendar">Calendar</Link>
                
                <Link to="/career">Career Page</Link>
                <Link to="/reports">Reports</Link>
            </Navigation>
        </Header>
      
        <Content>
            <div className="page-content" />
            <NavBar/>
        </Content>
    </Layout>
</div>
  );
  }
}

export default App;
