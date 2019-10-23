import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){

	let allBots = this.props.bots.map(botObj => <BotCard key={botObj.id} bot={botObj} clickHandler={this.props.clickHandler}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
    		  {allBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
