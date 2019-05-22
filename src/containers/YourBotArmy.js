import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    console.log(this.props);

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.props.myBots.map(thebot => <BotCard enlistBot={this.props.enlistBot} key={thebot.id} {...thebot} />)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
