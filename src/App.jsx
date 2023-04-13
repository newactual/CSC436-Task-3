import ListItem from './components/list-item';
import TotalPriceArrReduced from './components/total-arr-reduced';
import SortedProducts from './components/sorted-products';
import ProductsOnSale from './components/products-on-sale';
import './App.css';

function App() {
	const _products = [
		{ id: 1, name: 'Apple iPhone', price: 999, onSale: false },
		{ id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true },
		{ id: 3, name: 'Google Pixel 5', price: 699, onSale: false },
		{ id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true },
		{ id: 5, name: 'AirPods Pro', price: 249, onSale: false },
	];

	return (
		<div className="App">
			<h1>Product List</h1>

			<section>
				<h2>List of all products</h2>
				<ol>
					<ListItem products={_products} />
				</ol>
			</section>

			<section>
				<h3>List sorted in ascending order</h3>
				<ol>
					<SortedProducts products={_products} />
				</ol>
			</section>

			<section>
				<h4>List of products on sale</h4>
				<ol>
					<ProductsOnSale products={_products} />
				</ol>
			</section>

			<TotalPriceArrReduced products={_products} />
		</div>
	)
}

export default App
