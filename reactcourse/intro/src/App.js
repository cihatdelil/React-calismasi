import { Col, Container, Row } from "reactstrap";
import Category from "./Category";
import Navi from "./Navi";
import Product from "./Product";
import React, { Component } from 'react'
import alertify from "alertifyjs"
import { Route, Routes } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";
import FormDemo1 from "./Register";


export default class App extends Component {
  state = {
    currentCategory: " ",
    changeCategory: (category) => {
      this.setState({ currentCategory: category.CategoryName },
        this.getProducts(category.CategoryID))
    },
    products: [],
    cart: []
  }
  componentDidMount() {
    this.getProducts()
  }
  getProducts = (CategoryID) => {
    let url = "http://localhost:3000/products"
    if (CategoryID) {
      url += "?CategoryID=" + CategoryID
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.ProductID === product.ProductID)
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 })
    }

    this.setState({ cart: newCart })

    alertify.success(product.ProductName + " added to cart!", 2)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.ProductID !== product.ProductID)
    this.setState({ cart: newCart })
    alertify.error(product.ProductName + " remove from cart!", 2)
  }

  render() {
    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }
    return (
      <div >
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
          <Row>
            <Col xs="4">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.state.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="8">
              <Routes>

                <Route exact path="/" element={<Product addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />} />
                <Route exact path="/cart" element={<CartList removeFromCart={this.removeFromCart} cart={this.state.cart} />}></Route>
                <Route exact path="/form1" element={<FormDemo1></FormDemo1>}></Route>
                <Route exact path="*" element={<NotFound></NotFound>} />
              </Routes>


            </Col>
          </Row>
        </Container>



      </div>
    );
  }
}



