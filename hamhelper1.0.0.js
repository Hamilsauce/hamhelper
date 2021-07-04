class HamHelper {
	constructor() {}

	log(msg = '') {
		console.log(msg)
	}

	// !!obj
	isObjectEmpty(obj) {
		return Object.keys(obj).length === 0;
	}

	// !!queryselector
	qs(selector, parentEl = document) {
		if (typeof selector != 'string') {
			console.log('err: selector must be string');
			return
		} else {
			const el = parentEl.querySelector(selector)
			return el
		}
	}

	//!!queryselectorAll
	qsa(selector, parentEl = document) {
		if (typeof selector != 'string') {
			console.log('err: selector must be string');
			return
		} else {
			const el = parentEl.querySelectorAll(selector)
			return el
		}
	}

	setElementDataset(el, dataObj = {}) {
		if (!this.isObjectEmpty(dataObj)) {
			Object.entries(dataObj)
				.forEach(([prop, val]) => {
					el.dataset[prop] = val
				});
		} else {
			log('no data provided')
		}
	}

	createNewElement(tag = 'div', id = '', classList = [], dataObj = {}) {
		const el = document.createElement(tag);
		if (id) {
			el.id = id
		}
		if (classList) {
			el.classList.add(...classList)
		}
		if (!this.isObjectEmpty(dataObj)) {
			this.setElementDataset(el, dataObj)
		}
		return el;
	}
}

export default new HamHelper();




// const log = (msg = '') => {
// 	console.log(msg)
// }

// // !!obj
// const isObjectEmpty = (obj) => {
// 	return Object.keys(obj).length === 0;
// }

// // !!queryselector
// const $ = (selector, parentEl = document) => {
// 	if (typeof selector != 'string') {
// 		console.log('err: selector must be string');
// 		return
// 	} else {
// 		const el = parentEl.querySelector(selector)
// 		return el
// 	}
// }

// //!!queryselectorAll
// const $$ = (selector, parentEl = document) => {
// 	if (typeof selector != 'string') {
// 		console.log('err: selector must be string');
// 		return
// 	} else {
// 		const el = parentEl.querySelectorAll(selector)
// 		return el
// 	}
// }

// const setElementDataset = (el, dataObj = {}) => {
// 	if (!isObjectEmpty(dataObj)) {
// 		Object.entries(dataObj)
// 			.forEach(([prop, val]) => {
// 				el.dataset[prop] = val
// 			});
// 	} else {
// 		log('no data provided')
// 	}
// };

// const createNewElement = (tag = 'div', id = '', classList = [], dataObj = {}) => {
// 	const el = document.createElement(tag);
// 	if (id) {
// 		el.id = id
// 	}
// 	if (classList) {
// 		el.classList.add(...classList)
// 	}
// 	if (!isObjectEmpty(dataObj)) {
// 		setElementDataset(el, dataObj)
// 	}
// 	return el;
// }