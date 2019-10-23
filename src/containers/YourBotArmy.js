import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    let allBots = this.props.army.map(botObj => <BotCard key={botObj.id} bot={botObj} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          <h1 className="title">Your Army</h1>
          <br></br>
            {allBots}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
