import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	//   console.log("collection props: ", this.props)
	  let bots = this.props.bots.map(botObj => <BotCard key={botObj.id} bot={botObj}  clickHandler={this.props.showSpec} />)
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
