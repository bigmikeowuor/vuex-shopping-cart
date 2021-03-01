import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// equivalent to Vue data
		products: [],
	},

	getters: {
		// equivalent to Vue computed properties
		availableProducts(state) {
			return state.products.filter((product) => product.inventory > 0);
		},
	},

	actions: {
		// equivalent to Vue methods
		fetchProducts() {},
	},

	mutations: {
		// mutations are responsible for setting and updating the state
		setProducts(state, products) {
			// update products
			state.products = products;
		},
	},
});
