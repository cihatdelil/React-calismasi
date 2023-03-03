import React, { Component } from 'react'
import { Table, Button, Badge } from 'reactstrap'

export default class Product extends Component {


  render() {
    return (
      <div>
        <h3>{this.props.info.title}
          <Badge color="info">
            {this.props.currentCategory}
          </Badge>
        </h3>
        <Table
        >
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                ProductName
              </th>
              <th>
                QuantityPerUnit
              </th>
              <th>
                UnitPrice
              </th>
              <th>
                UnitsInStock
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product => (
                <tr>
                  <th scope="row">{product.ProductID}</th>
                  <td>{product.ProductName}</td>
                  <td>{product.QuantityPerUnit}</td>
                  <td>{product.UnitPrice}</td>
                  <td>{product.UnitsInStock}</td>
                  <td><Button onClick={() => this.props.addToCart(product)} color="info">
                    add
                  </Button></td>
                </tr>
              ))
            }


          </tbody>
        </Table>
      </div>
    )
  }
}
