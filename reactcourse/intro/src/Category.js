import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Category extends Component {
  state = {
    categories: []

  }

  componentDidMount() { this.getCategories() }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            this.state.categories.map(category => (
              <ListGroupItem
                active={category.CategoryName === this.props.currentCategory ? true : false}
                onClick={() => this.props.changeCategory(category)}
                key={category.CategoryID}>{category.CategoryName}</ListGroupItem>
            ))
          }
        </ListGroup>

      </div>
    )
  }
}
