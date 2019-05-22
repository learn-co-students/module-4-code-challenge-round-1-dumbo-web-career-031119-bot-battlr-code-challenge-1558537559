import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {


state = {
  availableBots:[],
  enlistedBots:[],
  selectedBot:null
}


componentDidMount(){
 fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
 .then(resp=>resp.json())
 .then(bots=>this.setState({
   availableBots:bots
 }))
}

handleSelection=(bot)=>{
  this.setState({
    selectedBot:bot
  })
}

handleGoBack=()=>{
  this.setState({
    selectedBot:null
  })
}

showAvailableBotsOrSelectedBot(){
  if(this.state.selectedBot===null){
    return<BotCollection handleSelection={this.handleSelection}availableBots ={this.state.availableBots}/>}
    else{return<BotSpecs handleGoBack={this.handleGoBack}handleEnlistment={this.handleEnlistment}bot={this.state.selectedBot}/>}
}

handleEnlistment=(newBot)=>{
  let newAvailableBots = this.state.availableBots.filter(bot=>bot !== newBot )
  this.setState({
    availableBots: newAvailableBots,
    enlistedBots:[...this.state.enlistedBots,newBot],
    selectedBot:null
  })
}


  render() {
    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlistedBots}/>
        {this.showAvailableBotsOrSelectedBot()}
      </div>
    );
  }

}

export default BotsPage;
