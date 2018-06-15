class TransactionView extends React.Component {
	constructor(props) {
		super(props);
		this.transaction = this.props.transaction;
	}

	render() {
		return (
			<div>
				<h3>{this.transaction.title}</h3>
				<p>Cost: {this.transaction.amount} </p>
			</div>
		);
	}
}