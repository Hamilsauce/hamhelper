// Last updated: 8/14/21

export default class HamHelper {
	constructor() {}
	
	static 

	static log(msg = '') { console.log(msg) }

	// !!obj
	static isObjectEmpty(obj) { return Object.keys(obj).length === 0 }

	// !!queryselector
	static qs(selector, parentEl = document) {
		if (typeof selector !== 'string') {
			console.error('error: selector must be string (in HamHelper.qs()).');
			return;
		} else return parentEl.querySelector(selector);
	}

	// !!querySelectorAll
	static qsa(selector, parentEl = document) {
		if (typeof selector != 'string') {
			console.error('error: selector must be string (in HamHelper.qsa()).');
			return;
		} else {
			return parentEl.querySelectorAll(selector);
		}
	}

	// !!Create Element
	static newElement(tag = 'div', attrs = {}, children, textContent) {
		const el = document.createElement(tag);

		if (textContent) el.textContent = `${textContent}`;

		for (let attr of Object.keys(attrs)) {
			if (attr === 'data') {
				Object.entries(attrs[attr]).forEach(([prop, val]) => el.dataset[prop] = val);
			} else if (attr === 'classList') {
				el.classList.add(...attrs[attr])
			} else {
				el.setAttribute(attr, attrs[attr])
			}
		}

		children.forEach(child => el.appendChild(child));

		return el;
	}

	static setElementDataset(el, dataObj = {}) {
		if (!this.isObjectEmpty(dataObj) && el) Object.entries(dataObj).forEach(([prop, val]) => el.dataset[prop] = val);
		else this.log('no data provided')
	}

	static help() {
		const helpText = `
HAM FUNCTIONS:
	
- newElement(tag = 'div', attrs = {}, children = [], textContent = ');
	
- qs(selector, parentEl = document);
	
- qsa(selector, parentEl = document);
	
- isObjectEmpty(obj) { return Object.keys(obj).length === 0 };
	
- setElementDataset(el, dataObj = {});
	
- log(msg = '') { console.log(msg) };
`;
		console.log(helpText);
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