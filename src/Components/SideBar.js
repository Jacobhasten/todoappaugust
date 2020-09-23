import React from 'react';
import '../App.css';
import hamburger from "../images/hamburger.png";
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
  state = {
    isCollapsed: true
  }
  toggleCollapse = () => {
    this.setState(state => { return { isCollapsed: !state.isCollapsed } })
  }
  render() {
    if (this.state.isCollapsed) {


      return (
        <div className="sidebar">

          <img className="sidebar__hamburger" src={hamburger} onClick={this.toggleCollapse}></img>
          <div className="sidebar__avatar">
            <img className="sidebar__avatar-img" src={this.props.user.avatar} />
            <p className="sidebar__avatar-name"> {this.props.user.firstName} {this.props.user.lastName}</p>
          </div>
          <Link to="/todos" style={styles.link}><h3>Git 'r Done</h3></Link>
          <Link to="/" style={styles.link}><h3>Dashboard</h3></Link>
          <h3>Games</h3>
        </div>
      )
    }

    else {
      return (
        <>
          <img className="sidebar__hamburger" src={hamburger} onClick={this.toggleCollapse}></img>
          <p>Its Not collapsed</p>

        </>)
    }
  }
}

const styles = {
  link: {
    textDecoration: "none"
  }
}

export default Sidebar