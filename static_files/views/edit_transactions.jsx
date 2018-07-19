class EditTransactions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transaction: this.props.transaction,
			transactionEdits: {
				title: this.props.transaction.title,
				amount: this.props.transaction.amount,
				date: this.props.transaction.date,
			}
		};
		this.editTitle = this.editTitle.bind(this);
		this.editAmount = this.editAmount.bind(this);
		this.editDate = this.editDate.bind(this);
		this.updateTransaction = this.updateTransaction.bind(this);
	}

	editTitle(event) {
		let newTitle = event.target.value
		this.state.transactionEdits.title = newTitle;
		this.setState(this.state);
	}

	editAmount(event) {
		let newAmount = event.target.value
		this.state.transactionEdits.amount = newAmount;
		this.setState(this.state);
	}

	editDate(event) {
		let newDate = event.target.value
		this.state.transactionEdits.date = newDate;
		this.setState(this.state);
	}

	updateTransaction(event) {
		event.preventDefault();
		this.state.transaction.title = this.state.transactionEdits.title;
		this.state.transaction.date = this.state.transactionEdits.date;
		this.state.transaction.amount = this.state.transactionEdits.amount;
		this.state.transaction.update().then(function() {
			ReactDOM.render(<Expenses />, document.getElementById('app'));
		});
	}

	render() {
		return (
			<div className="editTransaction">
				<h1>Edit Transaction: {this.state.transaction.title}</h1>
				<form onSubmit={this.updateTransaction}>
					<p>Title: </p><input type="text" value={this.state.transactionEdits.title} onChange={this.editTitle}/>
					<p>Amount: </p><input type="number" value={this.state.transactionEdits.amount} onChange={this.editAmount}/>
					<p>Date: </p><input type="date" value={this.state.transactionEdits.date} onChange={this.editDate}/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}