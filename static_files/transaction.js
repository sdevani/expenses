let transactions = [];

class Transaction {
	constructor(title, date, amount, tags) {
		this.title = title;
		this.date = date;
		this.amount = amount;
		this.tags = tags || [];
	}

	create() {
		transactions.push(this);
	}

	static getAllTransactions() {
		return transactions;
	}
}

let purchase = new Transaction("Shoes", "2018-06-15", 5);
purchase.create();

purchase = new Transaction("Shirt", "2018-06-14", 15);
purchase.create();

purchase = new Transaction("Pants", "2018-06-13", 25);
purchase.create();