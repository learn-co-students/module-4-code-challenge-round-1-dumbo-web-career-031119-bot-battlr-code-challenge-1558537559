import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  createBots = (bots) => {
		return bots.map((bot)=>{
			return < BotCard bot={{...bot}} enlistBot={this.props.removeBot}/>
		})
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.createBots(this.props.bots)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
