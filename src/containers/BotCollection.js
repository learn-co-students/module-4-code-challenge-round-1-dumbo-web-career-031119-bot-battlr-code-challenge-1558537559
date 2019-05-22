import React from "react";
import BotCard from "../components/BotCard";
import SearchBar from '../components/SearchBar'

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
    return this.props.bots.map((bot, idx) => {
      return <BotCard bot={bot} index={idx} viewOrRemove={this.viewBot}/>
    })
  }

  viewBot = (index) => {
    this.props.viewBot(index)
  }
  render(){
  	return (
      <div>
          <SearchBar updateSearch={this.props.updateSearch}/>
    	   <div className="ui four column grid">
      		<div className="row">
      		  {this.renderBots()}
      		</div>
    	   </div>
      </div>
  	);
  }

};

export default BotCollection;
