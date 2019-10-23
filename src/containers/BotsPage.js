import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state= {
    allBots: [],
    myBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp=>resp.json())
    .then(data=>this.setState({allBots:data}))
  }

  render() {

    return (
      <div>
        {<YourBotArmy bots={this.state.myBots} clickHandler={this.clickHandler}/>}
        {<BotCollection bots={this.state.allBots} clickHandler={this.clickHandler}/>}
      </div>
    );
  }

  clickHandler = (botObj, location) => {
    if(location === "all" && !this.state.myBots.includes(botObj)){
      console.log("clicked in all", botObj)
      let updated = [...this.state.myBots]
      updated.push(botObj)
      this.setState({
        myBots:updated
      })
    } else if (location === "myArmy"){
      console.log("clicked in mine", botObj)
      let updated = this.state.myBots.filter(bot=> bot !== botObj)
      this.setState({
        myBots: updated
      })
    }
  }
}

export default BotsPage;
