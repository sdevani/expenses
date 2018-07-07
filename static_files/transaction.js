let transactions = [];

class Transaction {
	constructor(title, date, amount, id) {
		this.title = title;
		this.date = date;
		this.amount = amount;
		this.id = id;
	}

	create(callback) {
		$.post('/transaction', {
			newPostData: {
				title: this.title,
				date: this.date,
				amount: this.amount
			}
		}, callback);
	}

	update(callback) {
		$.ajax({
			url: 'transaction/' + this.id,
			type: 'PUT',
			success: callback,
			data: {
				editedTransactionData: {
					title: this.title,
					date: this.date,
					amount: this.amount
				}
			}
		});

		// In jQuery $.puts does not exist :(
		// $.puts('/transaction/' + this.id, {
		// 	editedTransactionData: {
		// 		title: this.title,
		// 		date: this.date,
		// 		amount: this.amount
		// 	}
		// }, callback)
	}

	static getAllTransactions(callback) {
		$.get('/transactions', function(transactions) {
			let transactionObjects = transactions.map(function(transaction) {
				return new Transaction(
					transaction.title,
					transaction.date,
					transaction.amount,
					transaction.id);
			});

			callback(transactionObjects);
		});
	}
}

// let purchase = new Transaction("Shoes", "2018-06-15", 5);
// purchase.create();

// purchase = new Transaction("Shirt", "2018-06-14", 15);
// purchase.create();

// purchase = new Transaction("Pants", "2018-06-13", 25);
// purchase.create();