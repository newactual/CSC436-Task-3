import React from "react";

class ListItem extends React.Component {
    // 2. List of products w/ Array.map()
    render() {
        const _products = this.props.products;
        let productNames = _products.map((product, index) => <li key={index}>{product.name}</li> );
        
        return productNames;
    }
}

export default ListItem;