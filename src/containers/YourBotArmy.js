import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  state = {
    isClicked: false
  }

  renderArmyBots = () => {
    return this.props.army.map(bot => <BotCard key={bot.id} bot={bot} handleArmyBotClick={this.props.handleArmyBotClick}/>)
  }



  render(){
    // console.log('hello from army', this.props.army)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
           {this.renderArmyBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
