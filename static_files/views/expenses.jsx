class Expenses extends React.Component {
	constructor(props) {
		super(props);
	}

	navigateToNewTransaction() {
		ReactDOM.render(<NewTransaction />, document.getElementById('app'));
	}

	navigateToViewTransactions() {
		ReactDOM.render(<ViewTransactions />, document.getElementById('app'));
	}

	navigateToViewTrends() {
		ReactDOM.render(<ViewTrends />, document.getElementById('app'));
	}

	render() {
		return (
			<div className="homePage">
				<h1>Expense options</h1>
				<button onClick={this.navigateToNewTransaction}>Add new transaction</button><br/><br/>
				<button onClick={this.navigateToViewTransactions}>View transactions</button><br/><br/>
				<button onClick={this.navigateToViewTrends}>View trends</button>
			</div>
		);
	}
}