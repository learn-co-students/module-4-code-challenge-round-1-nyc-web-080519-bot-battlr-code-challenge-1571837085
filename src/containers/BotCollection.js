import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	state = {
		bots: []
	}
	
	componentDidMount () {
		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
		.then (response => response.json())
		.then (data => this.setState({
			bots: data
		})
		)
	}

  	render(){
		let botsArray = this.state.bots.map(bot => <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>)
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
