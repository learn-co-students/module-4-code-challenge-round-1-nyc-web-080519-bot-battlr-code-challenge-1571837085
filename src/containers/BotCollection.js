import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {

	render(){
	// console.log("state:", this.state)
	let botsArray = this.props.bots.map(botOBJ => <BotCard key={botOBJ.id} bot={botOBJ} clickHandler={this.props.clickHandler} />)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botsArray}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;
