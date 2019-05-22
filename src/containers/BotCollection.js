import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here

	render() {
		console.log(this.props);

		return (
			<div className="ui four column grid">
				<div className="row">
					{/*...and here..*/}
					{this.props.bots.map(thebot => <BotCard enlistBot={this.props.enlistBot} key={thebot.id} {...thebot} />)}
				</div>
			</div>
		);
	}

};

export default BotCollection;
