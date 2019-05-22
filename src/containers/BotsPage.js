import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    enlistedBots: [],
    show: false,
    showBot: {}
  }

  showBotPage = (bot) => {
    this.setState({
      show: true,
      showBot: bot
    })
  }

  goBack = () => {
    this.setState({
      show: false,
      showBot: {}
    })
  }

  handleClick = (bot) => {
    console.log('clicked', bot)
    let newBotsArr = [...this.state.enlistedBots];
    if (!newBotsArr.includes(bot)) {
      newBotsArr.push(bot);
      this.setState({
        enlistedBots: newBotsArr,
        show: false,
        showBot: {}
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

        {this.state.show ?
          <BotSpecs goBack={this.goBack} handleClick={this.handleClick} bot={this.state.showBot}/>
          : <BotCollection showBotPage={this.showBotPage} bots={this.state.bots}/>}

      </div>
    );
  }

}

export default BotsPage;
