const transaction = {
	investorId: 'string;',
	orderType: 'string;',
	orderId: 'string;',
	transferId: 'string;',
	playerId: 'string;',
	profileId: 'string;',
	fullName: 'string;',
	title: 'string;',
	subtext: 'string | null;',
	amount: 'number;',
	shares: 'number;',
	transferStatus: 'string;',
	transferType: 'string;',
	transactionTimestamp: 'number;',
	transactionTimestampSeconds: 'number;',
	teamNameAbbrev: 'string | null;',
	limitPrice: 'number | null;',
	marketMakerId: 'string;',
	status: 'StatusType;',
	sumOfSharesTransacted: 'number;',
	avgSharePrice: 'number;',
	transactionFee: 'number;',
	validUntilDate: 'firebase.firestore.Timestamp;',
};


const sortObjectPropertiesByName = (obj, type = 'asc') => {
	const sortType = type.trim().toLowerCase();
	let sortedObj;
	if (sortType === 'asc') {
		sortedObj = Object.entries(obj)
			.sort((a, b) => a[0] - b[0])
			.reduce((newObj, [key, val], i) => {
				newObj[key] = val;
				return newObj
			}, {})
	} else if (sortType === 'desc') {

	} else {}
	return sortedObj
}


const mapFromObject = (obj) => {
	return new Map(Object.entries(obj));
}

// console.log(sortObjectPropertiesByName(transaction, 'asc'));
console.log(...mapFromObject(transaction));






const transactionBackup = {
	investorId: 'string;',
	orderType: 'string;',
	orderId: 'string;',
	transferId: 'string;',
	playerId: 'string;',
	profileId: 'string;',
	fullName: 'string;',
	title: 'string;',
	subtext: 'string | null;',
	amount: 'number;',
	shares: 'number;',
	transferStatus: 'string;',
	transferType: 'string;',
	transactionTimestamp: 'number;',
	transactionTimestampSeconds: 'number;',
	teamNameAbbrev: 'string | null;',
	limitPrice: 'number | null;',
	marketMakerId: 'string;',
	status: 'StatusType;',
	sumOfSharesTransacted: 'number;',
	avgSharePrice: 'number;',
	transactionFee: 'number;',
	validUntilDate: 'firebase.firestore.Timestamp;',
}