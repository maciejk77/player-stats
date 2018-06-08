import React, { Component }  from 'react';
import '../css/styles.css';
import no_player from '../assets/no_player.png';
import player_data from '../data/player_stats.json';

class Player extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '--- Select player ---'
		}

		this.handle_change = this.handle_change.bind(this)
	}

	handle_change(event) {
		this.setState({ value: event.target.value });
		console.log(event.target.value)
	}

	render() {

    let player_info = player_data.players

    let player_list = player_info.map(el => {
      return <option key={el.player.id}>{el.player.name.last}</option>
    })



    return (

      <div className="block">

        <div className="drop-down">
          <select onChange={this.handle_change} value={this.state.value}>
            <option key={0}>-- Choose player ---</option>
            {player_list}
          </select>
        </div>

        <div className="top-box">
          <img className="image" src={no_player} />
        </div>

        <div className="bottom-box">
          STATS TEXT HERE!
        </div>

      </div>
    )


	}
}

export default Player