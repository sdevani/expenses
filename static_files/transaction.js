let transactions = [];

class Transaction {
	constructor(title, date, amount, id) {
		this.title = title;
		this.date = date;
		this.amount = amount;
		this.id = id;
	}

	create(callback) {
		return $.post('/transaction', {
			newPostData: {
				title: this.title,
				date: this.date,
				amount: this.amount
			}
		});
	}

	update() {
		return $.ajax({
			url: 'transaction/' + this.id,
			type: 'PUT',
			data: {
				editedTransactionData: {
					title: this.title,
					date: this.date,
					amount: this.amount
				}
			}
		});
	}

	static getAllTransactions() {
		return $.get('/transactions').then(function(transactions) {
			return new Promise(function(resolve) {
				let transactionObjects = transactions.map(function(transaction) {
					return new Transaction(
						transaction.title,
						transaction.date,
						transaction.amount,
						transaction.id);
				});

				resolve(transactionObjects);
			})
		});
	}
}

// let purchase = new Transaction("Shoes", "2018-06-15", 5);
// purchase.create();

// purchase = new Transaction("Shirt", "2018-06-14", 15);
// purchase.create();

// purchase = new Transaction("Pants", "2018-06-13", 25);
// purchase.create();