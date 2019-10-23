import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: []
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

  removeFromBotArmy = (bot) => {
    const botArmy = this.state.botArmy.filter(myBot => myBot.id !== bot.id)
    this.setState({botArmy})
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} clickHandler={this.removeFromBotArmy} />
        <BotCollection bots={this.state.bots} clickHandler={this.addToBotArmy} />
      </div>
    );
  }

}

export default BotsPage;
