import React, { Component } from "react";
import api from "../../service/api";
import { Link } from "react-router-dom";

import "./style.css";

class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </div>
        <div className="back">
          <Link to={`/`}>Voltar</Link>
        </div>
      </div>
    );
  }
}

export default Product;
