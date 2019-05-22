import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  state = {
      clicked: false,
      usersArmy: []
    }

  handleClick(){
    this.setState(prevState=>({
      clicked: !prevState.false
    }))
    }





  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <BotCard
              botArmy={this.botArmy}
              handleClick={this.handleClick}
              />
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
