import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	//Use bots that were passed in from BotsPage through props
	//Map over array creating a Bot Card for each of the elements in the array

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {this.props.bots.map(bot => <BotCard bot={bot} clickHandler={this.props.addBot}/>)}
			  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
