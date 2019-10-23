import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  bots = () => {
    return this.props.botArmy.map((bot) => {
      return <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler} />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.bots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
