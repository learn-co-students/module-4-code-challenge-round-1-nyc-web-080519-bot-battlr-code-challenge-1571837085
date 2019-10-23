import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	state = {
		filterTerm: "All"
	}

	changeHandler = (event) => {
		this.setState({filterTerm: event.target.value})
	}

  bots = () => {
	  let myBotArr = this.props.bots
	  if (this.state.filterTerm !== "All") {
		myBotArr = myBotArr.filter(myBot => myBot.bot_class === this.state.filterTerm )
	  }
	  myBotArr = myBotArr.map((bot) => {
		  return <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler} showBotHandler={this.props.showBotHandler} />
	  })
	  return myBotArr
  }

  render(){
  	return (
	  
  	  <div className="ui four column grid">
				<form>
					<select onChange={this.changeHandler}>
						<option value="All">All</option>
						<option value="Assault">Assault</option>
						<option value="Support">Support</option>
						<option value="Defender">Defender</option>
					</select>
				</form>
    		<div className="row">
    		  {this.bots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
