import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let bots = this.props.bots.map(botObj => <BotCard key={botObj.id} bot={botObj} showSpec={this.props.showSpec} clickHandler={this.props.removeClickHandler}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {bots}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
