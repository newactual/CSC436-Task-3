import React from "react";

class TotalPriceArrReduced extends React.Component {
    render() {
        // 1. Total cost of products w/ Array.reduce()
        const _products = this.props.products;
	    let reducedArray = _products.reduce((accumulator, item) => accumulator + parseInt(item.price), 0);
        const style = {
            textAlign: 'left'
        };

        return (
            <div>
                <p style={ style }><b>Total Price: {reducedArray}</b></p>
            </div>
        )
    }
}

export default TotalPriceArrReduced;