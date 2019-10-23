import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one

  state ={
    bots: [],
    yourBot: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => {
      this.setState({ bots: data })
    })
  }

  // function for when the card is clicked it adds that card to the yourBot state (makes a copy and adds the bot)

  clickHandler = (bot) => {
    let newArray = [bot, ...this.state.yourBot]
    this.setState({
      yourBot: newArray
    })
  }

  // funct to remove a bot once the card is clicked, pass it to the YourBotArmy component 

  removeBot = (bot) => {
    let newArr = [...this.state.yourBot].filter(botObj => botObj.id !== bot.id)
    this.setState({
      yourBot: newArr
    })
  }

  render() {
    // console.log(this.state.bots);

    return (
      <div>
        <BotCollection bots={this.state.bots} clickHandler={this.clickHandler}/>
        <YourBotArmy bots={this.state.yourBot} clickHandler={this.removeBot}/>
      </div>
    );
  }

}

export default BotsPage;



// BotPage is the highest component below App, and serves as the main container for all of the pieces of the page.

// fetch the bot data and save it in state

// render a BotCollection component in here and pass the state (array of bots) fetched from the API