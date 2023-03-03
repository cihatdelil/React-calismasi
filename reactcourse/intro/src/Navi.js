import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
  Nav,
  NavLink,
  Col,
  NavItem,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Abc extends Component {

  render() {

    return (
      <Nav tabs>
        <Col xs="10">
          <NavItem><NavLink href="#" active>
            <h4><Link to="/">NORTHWİND APP</Link></h4>
          </NavLink>
            <NavLink>
              <h4><Link to="/form1">Register</Link></h4>
            </NavLink></NavItem>
          <NavItem> </NavItem>

        </Col>

        <Col xs="2">
          <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
        </Col>
      </Nav>
    );
  }
}

