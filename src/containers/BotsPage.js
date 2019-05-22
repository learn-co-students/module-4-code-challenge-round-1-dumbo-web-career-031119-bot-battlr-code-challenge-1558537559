import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botCollector: [],
    botArmy: []
  }

  componentDidMount(){
    this.getBots()
  }


  render() {
    return (
      <div>
        <YourBotArmy addBot={this.addBot}/>
        <BotCollection bots={this.state.botCollector} />
      </div>
    );
  }


  getBots = () => {
    fetch(API)
    .then(res => res.json())
    .then(bots =>{
      this.setState({
        botCollector: bots
      })
    })
  }

  addBot = event => {
    let newBot = event.target.value
      this.setState({
        botArmy: [ ...this.state.botArmy, newBot ]
    })
  }
}
export default BotsPage;
