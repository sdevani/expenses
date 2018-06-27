class EditTransactions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transaction: this.props.transaction
		};
	}

	render() {
		return (
			<div className="editTransaction">
				<h1>Edit Transaction: {this.state.transaction.title}</h1>
			</div>
		);
	}
}