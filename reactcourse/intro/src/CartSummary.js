import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    Badge,
    NavItem,
    NavLink
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart-{this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem>

                            <Badge color="warning">
                                {cartItem.quantity}
                            </Badge>
                            {cartItem.product.ProductName}

                            <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>
                                Remove
                            </Badge>
                        </DropdownItem>

                    ))}

                    <DropdownItem divider />
                    <DropdownItem><Link to="cart">Go to cart</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>
                    Empty Cart
                </NavLink>
            </NavItem>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}
