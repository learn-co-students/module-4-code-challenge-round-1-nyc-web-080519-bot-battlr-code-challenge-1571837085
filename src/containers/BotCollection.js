import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  bots = () => {
	  return this.props.bots.map((bot) => {
		  return <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler} showBotHandler={this.props.showBotHandler} />
	  })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.bots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
