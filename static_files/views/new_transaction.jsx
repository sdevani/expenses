class NewTransaction extends React.Component {
	constructor(props) {
		super(props);
		this.addNewTransaction = this.addNewTransaction.bind(this);
	}

	addNewTransaction(event) {
		event.preventDefault();
		let domElement = event.target;
		let date = domElement.getElementsByClassName("date")[0].value;
		let title = domElement.getElementsByClassName("item_name")[0].value;
		let amount = domElement.getElementsByClassName("cost")[0].value;

		let transaction = new Transaction(title, date, amount, []);
		transaction.create().then(function() {
			ReactDOM.render(<Expenses />, document.getElementById('app'));
		});
	}

	render() {
		return (
			<div className="newTransaction">
				<h1>Add New Transaction</h1>
				<form onSubmit={this.addNewTransaction}>
					What did you buy: <input type="text" className="item_name"/><br/>
					How much did it cost: <input type="number" className="cost"/><br/>
					When did you get it: <input type="date" className="date"/><br/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}