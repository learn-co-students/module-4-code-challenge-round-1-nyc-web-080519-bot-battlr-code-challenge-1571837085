import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  
  render(){

	let bots = this.props.bots.map(botObj => <BotCard key={botObj.id} bot={botObj} clickHandler={this.props.clickHandler}/>)
	// console.log(bots);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
