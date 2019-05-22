import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {


state = {
  availableBots:[],
  enlistedBots:[]
}


componentDidMount(){
 fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
 .then(resp=>resp.json())
 .then(bots=>this.setState({
   availableBots:bots
 }))
}

handleEnlistment=(newBot)=>{
  let newAvailableBots = this.state.availableBots.filter(bot=>bot !== newBot )
  this.setState({
    availableBots: newAvailableBots,
    enlistedBots:[...this.state.enlistedBots,newBot]
  })
}


  render() {
    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlistedBots}/>
        <BotCollection handleEnlistment ={this.handleEnlistment} availableBots ={this.state.availableBots}/>
      </div>
    );
  }

}

export default BotsPage;
