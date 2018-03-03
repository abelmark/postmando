import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments/Payments";
import Aux from "../../hoc/Aux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
          <Aux>
            <li key="1">
              <Payments />
            </li>
            <li key="2" style={{ margin: '0 10px' }}> Credits: {this.props.auth.credits} </li>
            <li key="3">
              <a href="/api/logout">Logout</a>
            </li>
          </Aux>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wraper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Postmando
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
