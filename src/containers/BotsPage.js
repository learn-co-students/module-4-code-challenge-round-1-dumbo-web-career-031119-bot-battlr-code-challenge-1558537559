import React from "react";
import BotCollection from '../containers/BotCollection'
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots:[]
  }



  componentDidMount () {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(allBots => {
      console.log(allBots,'bots')
      this.setState({
        bots:allBots
      }) 
    })
  }
  
  render() {
    return (
      <div>
        {

          this.state.bots.map(bot =>{
            <BotCollection bot={this.state.bot}/>
            console.log(bot)
          })
          
        }
      </div>
    );
  }

}

export default BotsPage;
