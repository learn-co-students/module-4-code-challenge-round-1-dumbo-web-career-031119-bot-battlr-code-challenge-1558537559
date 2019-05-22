import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state={
    allBots: [],
    selectedBot: null,
    botArmy: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(allBots => this.setState({
      allBots
    }))
  }

  render() {
    const filteredBots = this.state.allBots.filter(bot => !this.state.botArmy.includes(bot))
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy botArmy={this.state.botArmy} setSelectedBot={this.setSelectedBot}/>
        {this.state.selectedBot ?
          <BotSpecs bot={this.state.selectedBot} botArmy={this.state.botArmy} enlisted={this.state.botArmy.includes(this.state.selectedBot)} enlistBot={this.enlistBot} setSelectedBot={this.setSelectedBot}
          removeBot={this.removeBot}
          />
          :
          <BotCollection
            allBots={filteredBots}
            setSelectedBot={this.setSelectedBot}
            />}
      </div>
    );
  }

  setSelectedBot = (selectedBot) => {
    this.setState({
      selectedBot
    })
  }

  enlistBot = (selectedBot) => {
    this.setState(prevState => {
      return {botArmy: [...prevState.botArmy, selectedBot]}
    })
  }

  removeBot = (selectedBot) => {
    this.setState(prevState => {
      let newArmy = prevState.botArmy.filter(bot => bot !== selectedBot);
      return {botArmy: newArmy}
    })
  }

}

export default BotsPage;
