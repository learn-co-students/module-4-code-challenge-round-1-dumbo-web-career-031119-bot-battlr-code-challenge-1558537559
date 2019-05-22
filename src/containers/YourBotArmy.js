import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderBots = () => {
    return this.props.yourArmy.map((bot, idx) => {
      return <BotCard bot={bot} index={idx} viewOrRemove={this.props.unrecruit}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
