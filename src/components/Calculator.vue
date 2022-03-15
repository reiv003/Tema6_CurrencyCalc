<template>
	<div>{{ baseCurrency }}</div>
	<div>{{ secondCurrency }}</div>
	<button v-on:click="fetchNew">Get new</button>
	<div>{{ allCurrencies }}</div>
</template>

<script>
	export default {
		data() {
			return {
				baseCurrency: '',
				secondCurrency: '',
				allCurrencies: ''

			}
		},
		created() {
			this.fetchNew();
		},

		methods: {
			async fetchNew() {
				const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';
				const res = await fetch(url);
				const { eur } = await res.json();
				console.log(eur);
				this.baseCurrency = eur.eur;
				this.secondCurrency = eur.ada;
				this.allCurrencies = eur;
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