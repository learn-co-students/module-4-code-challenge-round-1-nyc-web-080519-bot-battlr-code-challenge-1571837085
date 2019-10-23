import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    let bots = this.props.bots.map((botObj, i) => <BotCard key={i} bot={botObj} clickHandler={this.props.clickHandler}/>)
    // console.log(bots);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

// this component receives as a prop the state from the parent component BotsPage (starts off as empty, and when the bot card is clicked it's saved in the state and should appear here)

// receives a prop of clickHandler from the parent BotsPage component, where it points to removeBot function