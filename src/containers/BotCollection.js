import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

  renderBots() {
    return this.props.allBots.map(bot => <BotCard bot={bot} key={bot.id} setSelectedBot={this.props.setSelectedBot}/>)
  }

};

export default BotCollection;
