class ViewTransactions extends React.Component {
	constructor(props) {
		super(props);
		this.transactions = Transaction.getAllTransactions();
	}

	render() {
		let listOfTransactions = this.transactions.map(function(purchase, index) {
			return (
				<div key={"purchase_" + index}>
					<TransactionView transaction={purchase} />
				</div>
			);
		});

		return (
			<div className="viewTransactions">
				<h1>View Transactions</h1>
				{listOfTransactions}
			</div>
		);
	}
}