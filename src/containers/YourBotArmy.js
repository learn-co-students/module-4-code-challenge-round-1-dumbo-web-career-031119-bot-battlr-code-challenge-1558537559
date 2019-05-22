import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

renderYourArmy(){
  return this.props.enlistedBots.map(bot=><BotCard bot={bot} key={bot.id} />)
}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          <h1>Your Army</h1>
            {this.renderYourArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
