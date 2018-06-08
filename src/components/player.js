import React, { Component }  from 'react';
import '../css/styles.css';
import no_player from '../assets/no_player.png';
import spurs from '../assets/p4916.png';

import player_data from '../data/player_stats.json';

class Player extends Component {

	constructor(props) {
		super(props);

		this.handle_change = this.handle_change.bind(this)
	}

	handle_change(event) {
		this.setState({ value: event.target.value });
		console.log(event.target.value)
	}

	render() {

    let player_info = player_data.players
		console.log(player_info[0].player.id);
    let player_list = player_info.map(el => {
      return <option key={el.player.id}>{el.player.name.last}</option>
    })

    //const playerImage = `public/assets/p${playerData.player.id}.png`;
    //const player_image = `src/assets/p2064.png`;


    return (

      <div className="block">

        <div className="drop-down">
          <select className="select-class" onChange={this.handle_change}>
            <option>--- Choose player ---</option>
            {player_list}
          </select>
        </div>

        <div className="top-box">
          <img className="image" alt={no_player} src={spurs} />
        </div>

        <div className="bottom-box">
          STATS TEXT HERE!
        </div>

      </div>
    )


	}
}

export default Player