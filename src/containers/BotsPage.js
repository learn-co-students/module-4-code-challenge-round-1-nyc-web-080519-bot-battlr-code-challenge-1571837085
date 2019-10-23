import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: [],
    botToShow: ""
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(bots => {
      this.setState({bots})
    })
  }

  addToBotArmy = (bot) => {
    if (this.state.botArmy.includes(bot) === false) {
      const botArmy = [...this.state.botArmy, bot]
      this.setState({botArmy})
    }
  }

  changeBotToShow = (bot) => {
    this.setState({botToShow: bot})
  }

  removeFromBotArmy = (bot) => {
    const botArmy = this.state.botArmy.filter(myBot => myBot.id !== bot.id)
    this.setState({botArmy})
  }

  render() {
    let bots = <BotCollection bots={this.state.bots}  showBotHandler={this.changeBotToShow} />
    if (this.state.botToShow !== "") {
      bots = <BotSpecs bot={this.state.botToShow} showBotHandler={this.changeBotToShow} addToBotArmy={this.addToBotArmy} />
    }
  
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} clickHandler={this.removeFromBotArmy} />
        {/* <BotCollection bots={this.state.bots} clickHandler={this.addToBotArmy} showBotHandler={this.changeBotToShow} /> */}
        {bots}
      </div>
    );
  }

}

export default BotsPage;
