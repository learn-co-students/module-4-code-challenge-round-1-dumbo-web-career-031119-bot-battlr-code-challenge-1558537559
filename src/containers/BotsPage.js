import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
  	bots: [],
  	yourArmy: [],
  	currentBot: false,
  	searchKey: ""
  }

  componentDidMount() {
  	fetch(API)
  		.then(res=>res.json())
  			.then(allBots => {
  				this.setState({
  					bots: allBots
  				})
  			})
  }

  unrecruit = (index) => {
  		let newYourArmy = this.state.yourArmy
  		let unrecruitedBot = newYourArmy.splice(index, 1)[0]
  		this.setState(prevState => {
  			return  {
  				bots: [unrecruitedBot, ...prevState.bots],
  				yourArmy: newYourArmy
  			}
  		})
  }

  renderBotCollection = () => {
  	return <BotCollection bots={this.state.bots} viewBot={this.setCurrentBot} updateSearch={this.updateSearch} searchKey={this.state.searchKey}/>
  }

  renderBotSpecs = () => {
  	return <BotSpecs bot={this.state.currentBot} removeCurrentBot={this.removeCurrentBot} recruitCurrentBot={this.recruitCurrentBot}/>
  }


  recruitCurrentBot = () => {
  	console.log('RECRUITING')
  	this.setState(prevState => {
  		return {
  			yourArmy: [prevState.currentBot, ...prevState.yourArmy],
  			currentBot: false,
  		}
  	})
  }


  updateSearch = (searchKey) => {
  	this.setState({
  		searchKey: searchKey.target.value,
  	})
  }

  setCurrentBot = (index) => {
  	console.log('SETTING CURRENT BOT')
  	let newBotArray = this.state.bots
  	let currentBot = newBotArray.splice(index, 1)[0]
  	this.setState(prevState => {
  		return {
  			bots: newBotArray,
  			currentBot: currentBot
  		}
  	})
  }

  removeCurrentBot = () => {
  	console.log('REMOVED CURRENT BOT')
  	this.setState(prevState => {
  		return {
  			bots: [prevState.currentBot, ...prevState.bots],
  			currentBot: false
  		}
  	})
  }


  render() {
  	console.log(this.state)
    return (
      <div>
      	<YourBotArmy yourArmy={this.state.yourArmy} unrecruit={this.unrecruit} />
        {this.state.currentBot ? this.renderBotSpecs() : this.renderBotCollection()}
      </div>
    );
  }

}

export default BotsPage;
