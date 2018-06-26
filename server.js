const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('static_files'));

let transactions = [
	{title: "Shoes", date: "2018-06-15", amount: 5},
	{title: "Shirt", date: "2018-06-14", amount: 15},
	{title: "Pants", date: "2018-06-13", amount: 35}
]

app.get('/transactions', function(req, res) {
	res.json(transactions);
});

app.post('/transaction', function(req, res) {
	transactions.push(req.body.newPostData);
	res.json(req.body.newPostData);
})

app.listen(3000, () => console.log('Example app running!'));
