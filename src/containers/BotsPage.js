import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlistedBots: []
  }

  enlistBot = (botID) => {
    if (!this.state.enlistedBots.includes(botID)){
      this.setState({
        enlistedBots: [...this.state.enlistedBots, botID]
      })
    }
    else{
      alert(`ERROR: BOT IS ALREADY ENLISTED IN YOUR ARMY.`)
    }
  }

  filterBots = () => {
    return this.state.bots.filter((bot)=>{
      return this.state.enlistedBots.includes(bot.id)
    })
  }

  componentDidMount(){
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        bots: json
      })
    })
  }

  render() {
    return (
      <div>
        < YourBotArmy bots={this.filterBots()}/>
        < BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
