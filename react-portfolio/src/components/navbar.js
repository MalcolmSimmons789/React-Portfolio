import React from 'react';
import './navbar.css';

function navbar() {
	return (
		<div className='nav-wrapper nav-style'>
			<nav>
				<ul>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default navbar;
