import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  render(){
    let myArmy = this.props.myCollection.map(bot => <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {myArmy}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
