import React from 'react';
import "./styles.css"

const AutoSearch = () => (
	<>
		<form id="auto-search" action="/busca" method="get">
			<div className="input-group">
				<input type="text" autocomplete="off" placeholder="Explore nossos universos" />
				<button className="search-button">Buscar</button>
			</div>
		</form>
	</>
)

{/* <ul class="search-result-list">
	<li>
		<a data-value="item" href="/camiseta-rabo-corneo-hungaro-f" class="search-result-item">
			<span class="product-image">
				<img data-value="itemimage" src="https://static-store.worldticket.com.br/store/images/721/29721.png" alt="">
			</span>
			<span class="product-name">
				<span data-value="itemname">Camiseta Rabo-Córneo Hungaro</span>
				<span class="itemprice" data-value="itemprice">R$ 59,90</span>
			</span>
		</a>
	</li>
</ul> */}

export default AutoSearch;