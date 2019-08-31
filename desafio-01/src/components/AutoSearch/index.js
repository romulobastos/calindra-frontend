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
		
		const response = await api.get(`/autocomplete/${text}`,
		// {
		// 	headers: {
		// 		'Access-Control-Allow-Origin': '*',
		// 	}
		// 	,
		// 	proxy: {
		// 		host: 'https://store.omelete.com.br/',
		// 		port: 3128
		// 	}
		// }
		);
		console.log(response.data);
		// const { docs, ...productInfo } = response.data;
		
		this.setState({
			products: response.data,
			// productInfo,
			// page
		})
		// console.log(response.data.docs);
	};

	render() {
		return (
			<form id="auto-search" action="/busca" method="get">
				<div className="input-group">
					<input type="text" placeholder="Explore nossos universos" />
					<button className="search-button">Buscar</button>

					<div className="product-list">
						<h1>{this.products}</h1>
					</div>
				
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