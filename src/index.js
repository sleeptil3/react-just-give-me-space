import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import headerBkg from './images/header-bkg.jpeg'


import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<header>
				<div className='header-div'>
					<div>
						<h1 className='site-heading'>just give me <span className='space'>SPACE</span></h1>
						<p className='site-sub'>A Website for <span className='nerds'>Space Nerds</span></p>
					</div>
				</div>
			</header>
			<NavBar />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
