import Vue from 'vue';
import Vuex from 'vuex';
import shop from '@/api/shop';

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
		fetchProducts({ commit }) {
			return new Promise((resolve) => {
				shop.getProducts((products) => {
					commit('setProducts', products);
					resolve();
				});
			});
		},
	},

	mutations: {
		// mutations are responsible for setting and updating the state
		setProducts(state, products) {
			// update products
			state.products = products;
		},
	},
});
