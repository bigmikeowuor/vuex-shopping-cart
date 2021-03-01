/**
 * Mocking client-server processing
 */

const _products = [
	{ id: 1, title: 'iPad 4 Mini', price: 499.99, inventory: 5 },
	{ id: 2, title: 'H&M T-Shirt White', price: 9.99, inventory: 21 },
	{ id: 3, title: 'Charli XCX - Sucker CD', price: 20.99, inventory: 34 },
];

export default {
	getProducts(cb) {
		setTimeout(() => cb(_products), 100);
	},

	buyProducts(products, cb, errorCb) {
		setTimeout(() => {
			// simulate random checkout failure
			Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
		}, 100);
	},
};
