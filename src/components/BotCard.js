import React from "react";
import BotSpecs from "../components/BotSpecs"

class BotCard extends React.Component {
  state = {
    clicked: false
  }

  flipValue = (bot) => {
    console.log(this.props)
    if (this.state.clicked === false) {
      this.setState({clicked:true})
    } else {
      this.setState({clicked:false})
    }
    // console.log("I am flipping the value")
  }

  render () {
    // console.log("props in botcard", this.props)
    
    const { bot } = this.props;

    let botType;

    switch (bot.bot_class) {
      case "Assault":
        botType = <i className="icon military" />;
        break;
      case "Defender":
        botType = <i className="icon shield" />;
        break;
      case "Support":
        botType = <i className="icon ambulance" />;
        break;
      default:
        botType = <div />;
    }

    return (
      this.state.clicked ? <BotSpecs bot={this.props.bot} addToArmy={this.props.clickHandler} toggleView={this.flipValue}/> :
      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={() => this.flipValue()}
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name} {botType}
            </div>
    
            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>
    
            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div>
    );
  }
}


export default BotCard;
