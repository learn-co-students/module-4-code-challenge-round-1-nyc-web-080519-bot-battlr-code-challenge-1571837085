import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: [],
    showSpecs: false,

    showBot: null
  }


  addBot = (botObj) => {
    this.setState({myBots: [...this.state.myBots, botObj]})
  }

  removeBot = (botObj) => {
    let updatedBots = this.state.myBots.filter(bot => { return bot.id !== botObj.id})
    this.setState({myBots: updatedBots})
  }
  
  showBotSpecs = (botObj) => {
    console.log(botObj)
    this.setState({showSpecs: true, showBot: botObj})
  }

  showAllBots = () => {
    this.setState({showSpecs: false, showBot: null})
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
        {!this.state.showSpecs ? <BotCollection bots={this.state.bots} addBot={this.addBot} showBotSpecs={this.showBotSpecs}/> : <BotSpecs bot={this.state.showBot} showAllBots={this.showAllBots}/>}
  
      </div>
    );

  }

}

export default BotsPage;
