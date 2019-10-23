import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import Search from '../components/Search'

class BotsPage extends React.Component {
  state = {
    botsList:[],
    allBots: [],
    armyBots: [],
    searchTerm: ""
  }

  componentDidMount () {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(data => {
      this.setState({
        botsList: data,
        allBots: data
      })
    })
  }

  addToArmy = (bot) => {
    // console.log(bot)
    if (!this.state.armyBots.includes(bot)) {
      let newBots = [...this.state.armyBots, bot]
      this.setState({
        armyBots: newBots
      })
    } else {
      alert("You have already added this bot to your favorites.")
    }
  }

  deleteFromArmy = (bot) => {
    let newBots = this.state.armyBots.filter(botOBJ => botOBJ !== bot)
    this.setState({
      armyBots: newBots
    })
  }

  changeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    this.filterBots(event.target.value)
  }

  filterBots = (searchTerm) => {
    if (searchTerm !== "") {
      let filteredBots = this.state.allBots.filter(bot => bot.name.includes(searchTerm))
      this.setState({
        allBots: filteredBots
      })} else {
        this.setState({
          allBots: this.state.botsList
        })
      }
  }

  render() {
    // console.log("state:", this.state)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} changeHandler={this.changeHandler}/>
        <BotCollection bots={this.state.allBots} clickHandler={this.addToArmy} />
        <YourBotArmy army={this.state.armyBots} clickHandler={this.deleteFromArmy}/>
      </div>
    );
  }

}

export default BotsPage;
