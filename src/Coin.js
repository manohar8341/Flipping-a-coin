// Coin.js 

import React, { Component } from 'react'

class Coin extends Component { 
	render() { 
		return ( 
			<div class='Coin'> 
				<img 
					style={{ width: '200px', height: '200px' }} 
					src={this.props.info.imgSrc}
					alt={this.props.info.side}		
				/> 
			</div> 
		) 
	} 
} 

export default Coin
