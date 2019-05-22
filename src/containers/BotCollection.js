import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


renderBotCards(){
  return this.props.availableBots.map(bot=><BotCard handleSelection={this.props.handleSelection}bot={bot} key={bot.id} />)
}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
