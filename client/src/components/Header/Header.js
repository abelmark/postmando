import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    console.log(this.props.auth);
    switch(this.props.auth){
      case null:
        return "Loading";
        break;
      case false:
        return <li><a href="/auth/google">Login</a></li>;
        break;
      default:
        return <li><a href="/api/logout">Logout</a></li>
        break;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wraper">
          <a className="left brand-logo">
            Postmando
          </a>
          <ul className="right">
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);