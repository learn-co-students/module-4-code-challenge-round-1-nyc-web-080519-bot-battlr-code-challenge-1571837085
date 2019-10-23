import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'

class BotsPage extends React.Component {
 
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => {
      this.setState({bots: data})
    })
  }

  //GRAB AND REMOVE BOTS
  grabBot = (botObj) => {
    let myArmy = [...this.state.army, botObj]
    this.setState({army: myArmy})
  }

  removeBot = (botObj) => {
    let newArmy = this.state.army.filter(bot => bot.id !== botObj.id)
    this.setState({army: newArmy})
  }


  render() {


    return (
      <div>
        <YourBotArmy army={this.state.army} clickHandler={this.removeBot}/>
        <BotCollection bots={this.state.bots} clickHandler={this.grabBot}/>
      </div>
    );
  }

}

export default BotsPage;
