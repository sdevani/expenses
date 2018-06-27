class ViewTransactions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			titleFilter: "",
			transactions: []
		};

		let view = this;
		Transaction.getAllTransactions(function(transactions) {
			view.state.transactions = transactions;
			view.setState(view.state);
		});

		this.updateTitleFilter = this.updateTitleFilter.bind(this);
		this.navigateToEditTransactions = this.navigateToEditTransactions.bind(this);
	}

	updateTitleFilter(event) {
		this.setState({
			titleFilter: event.target.value
		});
	}


	navigateToEditTransactions(event) {
		let id = event.target.dataset.index;
		let transaction = this.state.transactions[id];
		ReactDOM.render(<EditTransactions transaction={transaction}/>, document.getElementById('app'));
	}

	render() {
		let updateTitleFilter = this.updateTitleFilter;
		let state = this.state;

		let view = this;
		let listOfTransactions = this.state.transactions.map(function(purchase, index) {
			if (purchase.title.includes(state.titleFilter)) {
				return (
					<div key={"purchase_" + index}>
						<div>
							<h3>{purchase.title}</h3>
							<p>Cost: {purchase.amount} </p>
						</div>
						<button onClick={view.navigateToEditTransactions} data-index={index}>Edit transaction</button><br/><br/>
					</div>
				);
			} else {
				return (<div key={"purchase_" + index}></div>);
			}
		});

		return (
			<div className="viewTransactions">
				<h1>View Transactions</h1>
				<div>
					<h2>Filters</h2>
					Title Contains: <input type="text" onChange={updateTitleFilter} />
					<h4>{this.state.titleFilter}</h4>
				</div>
				{listOfTransactions}
			</div>
		);
	}
}