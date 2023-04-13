import React from "react";

class ProductsOnSale extends React.Component {
    render() {
        // 4. List of products on sale w/ Array.filter()
        const _products = this.props.products;
        let productsOnSale = _products.filter((product) => product.onSale === true);
        let productNames = productsOnSale.map((product, index) => <li key={index}>{product.name}</li> );
        
        return productNames;
    }
}

export default ProductsOnSale;