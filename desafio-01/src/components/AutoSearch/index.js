import React, { Component } from 'react';
import "./styles.css";
import api from '../../services/api';

export default class AutoSearch extends Component {

	state = {
		products: [],
	}

	componentDidMount(){
		this.loadProducts();
	}

	loadProducts = async (text = 'can') => {
		
		const response = await api.get(`/autocomplete/${text}`);
		const { items } = response.data;
		console.log(items);
		// const { docs, ...productInfo } = response.data;
		
		this.setState({
			products: items,
		})
	}

	render() {
		const { products } = this.state;

		return (
			<form id="auto-search" action="/busca" method="get">
				<div className="input-group">
					<input type="text" placeholder="Explore nossos universos" />
					<button className="search-button">Buscar</button>

					<ul className="product-list">
						{products.map(p => (
							<li key={p.map.id}>
								<a href={`https://store.omelete.com.br/${p.map.uri}`}>
									<span className="product-image">
										<img data-value="itemimage" src={`https://static-store.worldticket.com.br/${p.map['images.url'][0]}`} />
									</span>
									<span className="product-name">
										{p.map.name}
									</span>
								</a>

								{/* <p>{product.description}</p> */}
								{/* <Link to={`/products/${product._id}`}>Acessar</Link> */}
							</li>
						))}
					</ul>				
				</div>
			</form>
			
			// <ul class="search-result-list">
			// 	<li>
			// 		<a data-value="item" href="/camiseta-rabo-corneo-hungaro-f" class="search-result-item">
			// 			<span class="product-image">
			// 				<img data-value="itemimage" src="https://static-store.worldticket.com.br/store/images/721/29721.png" alt="">
			// 			</span>
			// 			<span class="product-name">
			// 				<span data-value="itemname">Camiseta Rabo-Córneo Hungaro</span>
			// 				<span class="itemprice" data-value="itemprice">R$ 59,90</span>
			// 			</span>
			// 		</a>
			// 	</li>
			// </ul>
		);
	}

}