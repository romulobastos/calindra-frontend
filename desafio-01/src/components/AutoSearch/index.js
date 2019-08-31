import React, { Component } from 'react';
import "./styles.css";
import api from '../../services/api';

export default class AutoSearch extends Component {

	state = {
		products: [],
		searchquery: '',
	}

	changeQuery = (e) => {
		this.setState({
			searchquery: e.target.value,
		});
	}

	loadProducts = async (e) => {
		e.preventDefault();

		const text = this.state.searchquery;
		if ( text.length >= 3 ) {
			const response = await api.get(`/autocomplete/${text}`);
			const { items } = response.data;
			this.setState({
				products: items,
			})
		} else {
			this.setState({
				products: [],
			})
		}
	}

	render() {
		const { products, searchquery } = this.state;

		return (
			<form id="auto-search" action="/busca" method="get">
				<div className="input-group">
					<input type="text" value={searchquery} onChange={this.changeQuery} placeholder="Explore nossos universos" />
					<button type="submit" onClick={this.loadProducts} className="search-button">Buscar</button>

					<ul className="product-list">
						{products.map(p => (
							<li key={p.map.id}>
								<a href={`https://store.omelete.com.br/${p.map.uri}`}>
									<span className="product-image">
										<img data-value="itemimage" src={`https://static-store.worldticket.com.br/${p.map['images.url'][0]}`} />
									</span>
									<span className="product-info">
										<span className="product-name">
											{p.map.name}
										</span>
										<span className="product-price">
											{(p.map.salePrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
										</span>
									</span>
								</a>
							</li>
						))}
					</ul>				
				</div>
			</form>
		);
	}

}