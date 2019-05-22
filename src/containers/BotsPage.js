import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
class BotsPage extends React.Component {
  //start here with your code for step one

state={
  allBots: [],
  userBotArmy: []
}



componentDidMount(){
  this.fetchBots()
}

fetchBots(){
  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  .then(response => response.json())
  .then(bots =>{
    this.setState({
      allBots: bots
    })
  })
}

  render() {

    return (
      <div>
        <BotCollection allBots={this.state.allBots} chosenBotHandler={this.chosenBotHandler} />

        <YourBotArmy userBotArmy={this.state.userBotArmy}/>
      </div>
    );
  }

  chosenBotHandler=(bot)=>{
    this.setState({
      userBotArmy: [...this.state.userBotArmy, bot]
    })
  }

  // validateBot(bot){
  //   let botIds=[]
  //   this.state.userBotArmy.map(bot =>{
  //     return  botIds.push(bot.id)
  // }


}//end of class

export default BotsPage;
