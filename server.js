const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('static_files'));

let transactions = [
	{title: "Shoes", date: "2018-06-15", amount: 5, id: 1},
	{title: "Shirt", date: "2018-06-14", amount: 15, id: 2},
	{title: "Pants", date: "2018-06-13", amount: 35, id: 3}
]

let tags = [
	{id: 1, label: "clothes"},
	{id: 2, label: "accessories"},
	{id: 3, label: "red"}
]

let transactionTags = [
	{id: 1, tag_id: 1, transaction_id: 2},
	{id: 2, tag_id: 1, transaction_id: 3},
	{id: 3, tag_id: 3, transaction_id: 2}
]

let nextTransactionId = 4;
let nextTagId = 4;
let nextTransactionTagId = 4;

app.get('/transactions', function(req, res) {
	transactions.forEach(function(transaction) {
		transaction.tags = [];
		transactionTags.forEach(function(transactionTag) {
			if (transactionTag.transaction_id === transaction.id) {
				tags.forEach(function(tag) {
					if (tag.id === transactionTag.tag_id) {
						transaction.tags.push(tag);
					}
				})
			}			
		});
	})
	res.json(transactions);
});

app.post('/transaction', function(req, res) {
	let transaction = req.body.newPostData;
	transaction.id = nextTransactionId;
	nextTransactionId++;

	transactions.push(transaction);
	res.json(transaction);
})

// PUT /transaction/1
app.put('/transaction/:transactionId', function(req, res) {
	console.log(req.params);
	console.log(req.body.editedTransactionData);

	let transaction;
	transactions.forEach(function(transactionElement) {
		if (transactionElement.id == req.params.transactionId) {
			transaction = transactionElement;
		}
	});

	if (req.body.editedTransactionData.title) {
		transaction.title = req.body.editedTransactionData.title;
	}

	if (req.body.editedTransactionData.date) {
		transaction.date = req.body.editedTransactionData.date;
	}

	if (req.body.editedTransactionData.amount) {
		transaction.amount = req.body.editedTransactionData.amount;
	}

	res.json(transaction);
})

app.listen(3000, () => console.log('Example app running!'));
