import React from "react";

class SortedProducts extends React.Component {
    render() {
        // 3. List sorted in ascending order w/ Array.sort()
        const _products = this.props.products;
        let sortedProducts = _products.sort((a, b) => a.price - b.price);
        let productNames = sortedProducts.map((product, index) => <li key={index}>{product.name}</li> );
        
        return productNames;
    }
}

export default SortedProducts;