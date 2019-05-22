import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderEbotCards = () => {
    return this.props.ebots.map(ebot => {
      return <BotCard key={ebot.id} bot={ebot} enlisted={true} removeEbot={this.props.removeEbot}/>
    })
  }

  render(){
    console.log('ebots', this.props.removeEbot)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderEbotCards()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
