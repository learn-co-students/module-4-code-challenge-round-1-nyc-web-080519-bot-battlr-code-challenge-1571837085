import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){

	//Thinking of using ternary for conditional rendering on bottom of page
	//let allBots = (this.props.clickedBot === {} ? this.props.bots.map(botObj => <BotCard key={botObj.id} bot={botObj} clickHandler={this.props.clickHandler}/>) : this.props.clickedBot)

	
	let allBots = this.props.bots.map(botObj => <BotCard key={botObj.id} bot={botObj} clickHandler={this.props.clickHandler}/>)

  	return (
		  <div className="ui four column grid">
		  <h1 className="title">Collection of all bots</h1>
		  <br></br>
    		<div className="row">
    		  {allBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
