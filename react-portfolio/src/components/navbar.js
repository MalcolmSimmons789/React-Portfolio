import React from 'react';
import './navbar.css';

function navbar() {
	return (
		<div className='nav-wrapper nav-style'>
			<ul>
				<li>
					<a href=''>Home</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
				<li>
					<a href=''>Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default navbar;
