import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = (props) => {
		const renderBots = () => {
			return props.bots.map(bot => {
				return <BotCard key={bot.id} bot={bot} />
			})
		}
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {renderBots()}
    		  
    		</div>
  	  </div>
  	);
};

export default BotCollection;
