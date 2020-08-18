import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../main';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main>
        <Layout>
          <Header className="bg-dark" title={<NavLink style={{ textDecoration: 'None', fontWeight: 'bold', color: 'white' }} to="/" activeClassName="selected">MyPortfolio</NavLink>} scroll>
            <Navigation>
              <NavLink to="/resume" activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>Resume</NavLink>
              <NavLink to="/aboutme" activeStyle={{
                fontWeight: "bold",
                color: "blue"
              }}>About Me</NavLink>
              <NavLink to="/projects" activeStyle={{
                fontWeight: "bold",
                color: "yellow"
              }}>Projects</NavLink>
              <NavLink to="/contact" activeStyle={{
                fontWeight: "bold",
                color: "green"
              }}>Contact</NavLink>
            </Navigation>
          </Header>
          <Drawer title={<NavLink style={{ color: 'black', fontWeight: 'bold' }} to="/" activeClassName="selected">MyPortfolio</NavLink>}>
            <Navigation>
              <NavLink to="/resume" activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>Resume</NavLink>
              <NavLink to="/aboutme" activeStyle={{
                fontWeight: "bold",
                color: "blue"
              }}>About Me</NavLink>
              <NavLink to="/projects" activeStyle={{
                fontWeight: "bold",
                color: "yellow"
              }}>Projects</NavLink>
              <NavLink to="/contact" activeStyle={{
                fontWeight: "bold",
                color: "green"
              }}>Contact</NavLink>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </main>

    );
  }
}

export default App;
