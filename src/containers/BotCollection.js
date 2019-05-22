import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  state = {
    allBots: []
  }


componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(resp=> resp.json())
  .then(allRobots =>{
    this.setState({
      allBots: allRobots
    })
  })
}




  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.allBots.map(bots=>{
            return (
              <BotCard bot={bots} key={bots.id}/>
            )
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
