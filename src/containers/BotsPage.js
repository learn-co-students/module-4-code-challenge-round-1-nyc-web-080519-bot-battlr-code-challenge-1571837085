import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  state = {
    myCollection: []
  }
  
  addBot = (bot) => {
    let newArray = this.state.myCollection.includes(bot)? [...this.state.myCollection] : [...this.state.myCollection, bot]
    this.setState({
      myCollection: newArray
    })
  }

  removeBot = (bot) => {
    let newArray = this.state.myCollection.filter(botObj => botObj.id !== bot.id)
    this.setState({
      myCollection: newArray
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myCollection={this.state.myCollection} clickHandler={this.removeBot}/>
        <BotCollection clickHandler={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
