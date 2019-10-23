import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: []
  }


  addBot = (botObj) => {
    this.setState({myBots: [...this.state.myBots, botObj]})
  }

  removeBot = (botObj) => {
    let updatedBots = this.state.myBots.filter(bot => { return bot.id !== botObj.id})
    this.setState({myBots: updatedBots})
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(bots => this.setState({bots: bots}))
  }

  render() {
    return (
      <div>

        <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot}/>
  
      </div>
    );
  }

}

export default BotsPage;
