export default class HamHelper {
	constructor() {}

	static log(msg = '') { console.log(msg) }

	// !!obj
	static isObjectEmpty(obj) { return Object.keys(obj).length === 0 }

	// !!queryselector
	static qs(selector, parentEl = document) {
		if (typeof selector !== 'string') {
			console.error('error: selector must be string (in HamHelper.qs()).');
			return;
		} else {
			return parentEl.querySelector(selector)
		}
	}

	//!! querySelectorAll
	static qsa(selector, parentEl = document) {
		if (typeof selector != 'string') {
			console.error('error: selector must be string (in HamHelper.qsa()).');
			return;
		} else {
			return parentEl.querySelectorAll(selector);
		}
	}

	static createNewElement(tag = 'div', id = '', classList = [], dataObj = {}) {
		const el = document.createElement(tag);
		if (id) el.id = id
		if (classList) el.classList.add(...classList)
		if (!this.isObjectEmpty(dataObj)) {
			this.setElementDataset(el, dataObj)
		}
		return el;
	}

	static newElement(tag = 'div', attrs = {}, ...children) {
		const el = document.createElement(tag);

		for (let attr of Object.keys(attrs)) {
			if (attr === 'data') {
				Object.entries(attrs[attr]).forEach(([prop, val]) => el.dataset[prop] = val);
			} else if (attr === 'classList') {
				el.classList.add(...classList)
			} else {
				el.setAttribute(attr, attrs[attr])
			}
		}

		for (let child of children) {
			el.appendChild(child);
		}

		return el;
	}

	static setElementDataset(el, dataObj = {}) {
		if (!this.isObjectEmpty(dataObj) && el) Object.entries(dataObj).forEach(([prop, val]) => el.dataset[prop] = val);
		else this.log('no data provided')
	}

}

// export default new HamHelper();

function elt(name, attrs, ...children) {
	let dom = document.createElement(name);
	for (let attr of Object.keys(attrs)) {
		dom.setAttribute(attr, attrs[attr]);
	}
	for (let child of children) {
		dom.appendChild(child);
	}
	return dom;
}