<template>
	<div class="content">
		<div>{{ baseCurrencyAmount }}</div>
		<!-- <div> {{ getCurrency.eur }} </div> -->
		<div>{{ secondCurrencyAmount }}</div>
		<button v-on:click="selectCurrency">Get new</button>
		<div>{{ allCurrencies }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currency: 'nok',
				baseCurrencyAmount: null,
				secondCurrencyAmount: null,
				allCurrencies: ''

			}
		},
		created() {
			this.fetchNew();
		},

		// computed: {
		// 	getCurrency() {
		// 		return this.currency = Object.keys(this.data)[1];
		// 	}
		// },

		methods: {
			async fetchNew() {
				let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.currency}.json`;
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				this.currency = Object.keys(data)[1];
				console.log(res);
				// this.baseCurrencyAmount = Object.values(data)[1];
				this.baseCurrencyAmount = data.nok.nok;
				this.secondCurrencyAmount = data.nok.eur;
				this.allCurrencies = Object.keys(data.nok);
				// console.log(data["1inch"].ada);
    			// console.log(Object.keys(data.eur));
			},

			selectCurrency() {
				this.currency = 'eur';
				console.log(this.currency);
			}





			// handleData(data) {
			// 	console.log(data);
			// 	console.log(data["1inch"].ada);
			// 	console.log(Object.keys(data.eur));
			// },

			// handleError(status) {
			// 	if (status === 404) {
			// 		console.log("Valuta ikke funnet/verdi ikke gyldig");
			// 	}
			// 	if (status === 401) {
			// 		console.log("Ingen tilgang");
			// 	}
			// 	if (status === 500) {
			// 		console.log("Server er ikke tilgjengelig");
			// 	}
			// },
			
			// async getData() {
			// 	const fetchUrl='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';
			// 	const options={
			// 		method: 'GET'
			// 	};

			// 	try {
			// 		const response = await fetch(fetchUrl, options);
			// 		const data = await response.json();

			// 		if(response.status!=200) {
			// 			handleError(response.status);
			// 		} else {
			// 			handleData(data);
			// 		}

			// 	} catch(error) {
			// 		console.log('Det oppstod en feil');
			// 		return 'Det oppstod en feil';
			// 	}
      	// }
		}
	}
</script>

<style>
	
</style>	