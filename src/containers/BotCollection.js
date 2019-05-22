import React from "react";
import BotsPage from '../containers/BotsPage'
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{

					<BotCard bots={this.state}/>
					})

					}
				
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
