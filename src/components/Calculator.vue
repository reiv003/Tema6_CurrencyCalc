<template>
	<div class="content">
		<div>{{ baseCurrencyAmount }}</div>
		<div>{{ secondCurrencyAmount }}</div>
		<button v-on:click="selectCurrency">Get new</button>
		<!-- This was intended to be used for the dropdown select, but I could not get it to work (the simpler version with just a button).  -->
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
				/* I could not get the currency to change in the UI, but if the currency is changed here (ie to data.nok.usd, etc) it is reflected on the site. */
				this.baseCurrencyAmount = data.nok.nok;
				this.secondCurrencyAmount = data.nok.eur;
				this.allCurrencies = Object.keys(data.nok);
			},

			/* This was meant to be the method that the user select a currency from the dropdown. To test/start with I just made it change the value to a different currency, but the new conversion is not reflected in the view. The computed value was also an attempt at this. */

			selectCurrency() {
				this.currency = 'eur';
				console.log(this.currency);
			}
		}
	}
</script>

<style>
	
</style>	