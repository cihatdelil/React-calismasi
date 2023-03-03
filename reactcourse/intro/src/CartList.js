import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class CartList extends Component {
    renderCart() {
        return (
            <Table striped >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.ProductID}>
                                <td>{cartItem.product.ProductID}</td>
                                <td>{cartItem.product.CategoryID}</td>
                                <td>{cartItem.product.ProductName}</td>
                                <td>{cartItem.product.UnitPrice}</td>
                                <td>{cartItem.product.UnitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>
                                        Remove
                                    </Button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
