import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state= {
    allBots: [],
    myBots: [],
    shown: false
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp=>resp.json())
    .then(data=>this.setState({allBots:data}))
  }

  render() {

    return (
      <div>
        {<YourBotArmy bots={this.state.myBots} showSpec={this.showSpec} removeClickHandler={this.removeClickHandler}/>}
        {!this.state.shown ? <BotCollection bots={this.state.allBots} showSpec={this.showSpec} hideSpec={this.hideSpec}/> : <BotSpecs hideSpec={this.hideSpec} bot={this.state.shown} addClickHandler={this.addClickHandler}/>}
      </div>
    );
  }

  addClickHandler = (botObj) => {
    if(!this.state.myBots.includes(botObj)){
      let updated = [...this.state.myBots]
      updated.push(botObj)
      this.setState({
        myBots:updated,
        shown: false
      })
    }}
  removeClickHandler = (botObj) => {
      // console.log("clicked in mine", botObj)
      let updated = this.state.myBots.filter(bot=> bot !== botObj)
      this.setState({
        myBots: updated
      })
    }


  showSpec = (botObj) => {
    this.setState({
      shown:  {...botObj}
    })
  }

  hideSpec = () => {
    this.setState({
      shown: false
    })
  }




}

export default BotsPage;
