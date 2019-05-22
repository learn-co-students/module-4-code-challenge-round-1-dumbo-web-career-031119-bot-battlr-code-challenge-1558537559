import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    armyBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(parsedRes => {
          this.setState({
            allBots: parsedRes
          })
      })
  }

  //function to enlist bots from collection to army 
  handleBotClick = (id) => {
    let bot = [...this.state.allBots].find(bot => {
        return bot.id === id
    })
    let botArr = [...this.state.allBots].filter(bot => {
      return bot.id != id
    });

    this.setState({
      allBots: botArr,
      armyBots: [...this.state.armyBots, bot]
    })
  }


  //function to de-enlist bots from army 

  handleArmyBotClick = (id) => {
    console.log('de-enlist')
  }

  render() {
    console.log('armybots',this.state.armyBots)
    console.log('allbots',this.state.allBots)

    return (
      <div>
        <YourBotArmy army={this.state.armyBots} handleArmyBotClick={this.handleArmyBotClick}/>
        <BotCollection bots={this.state.allBots} handleBotClick={this.handleBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
