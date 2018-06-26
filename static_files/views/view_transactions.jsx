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
	}

	updateTitleFilter(event) {
		this.setState({
			titleFilter: event.target.value
		});
	}

	render() {
		let updateTitleFilter = this.updateTitleFilter;
		let state = this.state;

		let listOfTransactions = this.state.transactions.map(function(purchase, index) {
			if (purchase.title.includes(state.titleFilter)) {
				return (
					<div key={"purchase_" + index}>
						<div>
							<h3>{purchase.title}</h3>
							<p>Cost: {purchase.amount} </p>
						</div>
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