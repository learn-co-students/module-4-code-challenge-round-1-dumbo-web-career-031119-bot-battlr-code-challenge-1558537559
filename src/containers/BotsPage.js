import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state={
    allBots: [],
    selectedBot: null,
    botArmy: [],
    sort: undefined
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(allBots => this.setState({
      allBots
    }))
  }

  filteredBots = () => this.state.allBots.filter(bot => !this.state.botArmy.includes(bot))

  render() {
    // const sortedBots = this.applySort(filteredBots)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy botArmy={this.state.botArmy} setSelectedBot={this.setSelectedBot}/>
        {this.state.selectedBot ?
          <BotSpecs bot={this.state.selectedBot} botArmy={this.state.botArmy} enlisted={this.state.botArmy.includes(this.state.selectedBot)} enlistBot={this.enlistBot} setSelectedBot={this.setSelectedBot}
          removeBot={this.removeBot}
          />
          :
          <React.Fragment>
            Sort By
            <select value={this.state.sort} onChange={this.setSort}>
              <option value={null}/>
              <option value="name">Name</option>
              <option value="health">Health</option>
              <option value="damage">Damage</option>
              <option value="armor">Armor</option>
            </select>
            <BotCollection
              allBots={this.applySort(this.filteredBots())}
              setSelectedBot={this.setSelectedBot}
              />
          </React.Fragment>
      }
      </div>
    );
  }

  setSort = (event) => {
    this.setState({
      sort: event.target.value
    }, () => console.log(this.state.sort))
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

  applySort = (arr) => {
    const {sort} = this.state
    if (sort) {
      const sortedBots = arr.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1);
      if (sort === "name" || "damage") {
        return sortedBots
      } else {
        const reverseBots = sortedBots.reverse()
        return reverseBots
      }
    }
    else {
      return arr
    }
  }

}

export default BotsPage;
