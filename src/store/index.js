import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	// equivalent to Vue data
	state: {
		products: [],
		cart: [],
		checkoutStatus: null,
	},

	// equivalent to Vue computed properties
	getters: {
		availableProducts(state) {
			return state.products.filter((product) => product.inventory > 0);
		},

		cartProducts(state) {
			return state.cart.map((cartItem) => {
				const product = state.products.find((product) => product.id === cartItem.id);

				return {
					title: product.title,
					price: product.price,
					quantity: cartItem.quantity,
				};
			});
		},

		cartTotal(state, getters) {
			return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
		},

		productIsInStock() {
			return (product) => {
				return product.inventory > 0;
			};
		},
	},

	// equivalent to Vue methods
	actions: actions,

	// mutations are responsible for setting and updating the state
	mutations: {
		setProducts(state, products) {
			// update products
			state.products = products;
		},

		pushProductToCart(state, productId) {
			state.cart.push({
				id: productId,
				quantity: 1,
			});
		},

		incrementItemQuantity(state, cartItem) {
			cartItem.quantity++;
		},

		decrementProductInventory(state, product) {
			product.inventory--;
		},

		setCheckoutStatus(state, status) {
			state.checkoutStatus = status;
		},

		emptyCart(state) {
			state.cart = [];
		},
	},
});
