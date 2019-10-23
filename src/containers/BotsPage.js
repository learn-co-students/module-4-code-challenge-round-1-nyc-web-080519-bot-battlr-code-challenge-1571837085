import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {
 
  state = {
    bots: [],
    army: [],
    clickedBot: {}
  }

  //MOUNTING
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => {
      this.setState({bots: data})
    })
  }

  //REPLACE COLLECTION WITH SPECS
  populateClickedBot = (botObj) => {
    this.setState({clickedBot: botObj}) 
  }

  unpopulateClickedBot = () => {
    this.setState({clickedBot: {}})
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
    //conditional render --> if clickedBot !== {} show BotCollection, else show BotSpecs
    let showing = this.state.clickedBot.name === undefined ? <BotCollection bots={this.state.bots} clickHandler={this.populateClickedBot} clickedBot={this.state.clickedBot}/> : <BotSpecs bot={this.state.clickedBot} clickHandler={this.grabBot} unpopulate={this.unpopulateClickedBot}/>


    return (
      <div>
        <YourBotArmy army={this.state.army} clickHandler={this.removeBot}/>
        {showing}
        {/* <BotSpecs bot={this.state.clickedBot} clickHandler={this.grabBot} unpopulate={this.unpopulateClickedBot}/>
        <BotCollection bots={this.state.bots} clickHandler={this.populateClickedBot} clickedBot={this.state.clickedBot}/> */}
      </div>
    );
  }

}

export default BotsPage;
