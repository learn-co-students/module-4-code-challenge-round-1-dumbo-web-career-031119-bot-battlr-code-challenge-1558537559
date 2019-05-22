import React from "react";
import BotCollection from "./BotCollection"


//
//  😪 -------------- HELLO PERSON WHO GRADES THIS ----------- 😪
// i got stuck on my fetch over the dumbest mistake, then got panicky- figured out the fetch, then went panicky again at the time wasted and just went blank. Feeling very similar to how the first code challenge went....
// sorry, I really wanted to do well and really flubbed it up instead..... I will not flub up the retake
//
//
// 😶😶😶😶😶😶😶😶😶😶😶😶   😪    😶😶😶😶😶😶😶😶😶😶😶😶
//  _______________________________________________________
//


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: []
  }



  fetchData(){
  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(allBots =>{
      this.setState({
        allBots
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }


  render() {
    // console.log(this.state.allBots, "just state")

    return (
      <div>
      <BotCollection />
      {this.state.allBots.map(bot =>{
        return(
        console.log(bot)
)
      })}
      </div>
    );
  }

}

export default BotsPage;
