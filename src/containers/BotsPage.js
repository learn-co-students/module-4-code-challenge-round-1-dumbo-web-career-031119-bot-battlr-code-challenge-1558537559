import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    enlistedBots: []
  }

  handleClick = (bot) => {
    console.log('clicked', bot)
    let newBotsArr = [...this.state.enlistedBots];
    if (!newBotsArr.includes(bot)) {
      newBotsArr.push(bot);
      this.setState({
        enlistedBots: newBotsArr
      })
    }
  }

  removeEbot = (bot) => {
    console.log('remove')
    let newEbotsArr = [...this.state.enlistedBots];
    let index = newEbotsArr.indexOf(bot);
    newEbotsArr.splice(index, 1);
    this.setState({
      enlistedBots: newEbotsArr
    })
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(parsedRes => {
      this.setState({
        bots: parsedRes
      })
    })
  }

  render() {
    //console.log(this.state.bots)
    return (
      <div>
        <YourBotArmy ebots={this.state.enlistedBots} removeEbot={this.removeEbot}/>
        <BotCollection handleClick={this.handleClick} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
