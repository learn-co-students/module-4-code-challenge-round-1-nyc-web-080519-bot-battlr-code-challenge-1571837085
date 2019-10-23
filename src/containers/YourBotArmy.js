import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  render(){
    let armyArray = this.props.army.map(botOBJ => <BotCard key={botOBJ.id} bot={botOBJ} clickHandler={this.props.clickHandler} army/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {armyArray}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
