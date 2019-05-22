import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

  renderBotArmy() {
    return this.props.botArmy.map(bot => <BotCard bot={bot} key={bot.id} setSelectedBot={this.props.setSelectedBot}/>)
  }

};

export default YourBotArmy;
