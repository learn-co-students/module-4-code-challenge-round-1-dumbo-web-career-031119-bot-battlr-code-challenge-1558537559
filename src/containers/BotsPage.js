import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);
    this.state = {
      botInventory: [],
      myBots: []
    }
    this.fetchBots()
  }

  enlistBot = (id) => {
    let theBot = this.state.botInventory.find((bot) => { return bot.id === id })
    if (!(this.state.myBots.includes(theBot))) {
      this.setState((state) => ({
        myBots: [...state.myBots, theBot]
      }))
    } else {
      let newArmy = this.state.myBots.filter(bot => bot.id !== theBot.id)
      this.setState((state) => ({
        myBots: newArmy
      }))
    }
  }

  fetchBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(resj => this.setState({ botInventory: resj }))
  }

  render() {
    return (
      <div>
        <YourBotArmy enlistBot={this.enlistBot} myBots={this.state.myBots} />
        <BotCollection enlistBot={this.enlistBot} bots={this.state.botInventory} />
      </div>
    );
  }

}

export default BotsPage;
