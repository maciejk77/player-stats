import React, { Component }  from 'react';
import '../css/styles.css';
import no_player from '../assets/no_player.png';

function Player() {
	return (
		<div className="block">
			
			<div className="drop-down">DROPDOWN</div>
			
			<div className="top-box">
				<img className="image" src={no_player} />
			</div>
			
			<div className="bottom-box">
				STATS TEXT HERE!
			</div>
		
		</div>
	)
}

export default Player