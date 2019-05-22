import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	renderBotCards = () => {
		return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick}/>)
	}

  render(){
		// console.log('hello from bot collection', this.props.bots)
  	return (
  	  <div className="ui four column grid">
			  <h1>Collection of all bots</h1>

    		<div className="row">
					{this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
