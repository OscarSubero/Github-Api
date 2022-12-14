import React from 'react';
import './Header.css';
// Imagen
import image from '../Header/github-logo-white.png';

function Header({ title }) {
	return (
		<div className='Header'>
			<h2>
				<img src={image} alt='logo-github' width='150px' />
			</h2>
			<h1>{title}</h1>
		</div>
	);
}

Header.defaultProps = {
	title: 'Github API',
};

export default Header;
