import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	createBots = (bots) => {
		return bots.map((bot)=>{
			return < BotCard key={bot.id} bot={{...bot}} showBot={this.props.showBot}/>
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				<h1>Collection of All Bots</h1>
					{this.createBots(this.props.bots)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
