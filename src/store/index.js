import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

new Vuex.Store({
	state: {
		// equivalent to Vue data
		products: [],
	},

	getters: {
		// equivalent to Vue computed properties
		productsCount() {},
	},

	actions: {
		// equivalent to Vue methods
		fetchProducts() {},
	},

	mutations: {
		// mutations are responsible for setting and updating the state
		setProducts() {},
	},
});