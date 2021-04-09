import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import './home.css'

export default function Home({ apodData }) {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [apodData])

	if (!apodData.length) {
		return ''
	} else {
		return (
			<div className='Home fadeIn'>
				<h1>Welcome.</h1>
				<p>
					Welcome to JUST GIVE ME SPACE, a website for space nerds. Feel free to explore using the spaceship navigation on the right. You'll find a a dark sky forecast page that will display the viewing conditions in your chosen locale, a SpaceX information page, a gallery of astronomy pictures, and a collection of films that revolve around space themes, 'orbit' pun intended.
				</p>
				<br />
				<br />
				<p>
					I hope you enjoy the content on this website. May you always find dark skies and a big telescope waiting.
				</p>
				<br />
				<br />
				<p>
					<span className='heavy'>-Shawn</span>
				</p>
				<div className='quote'>
					<h2><ImQuotesLeft className='accent-color quote-icon' />If you wish to make an apple pie from scratch, you must first invent the universe<ImQuotesRight className='accent-color quote-icon' /></h2>
					<h2 className='light'>-Carl Sagan</h2>
				</div>

				<div className='apod-div'>
					<h1>Astronomy Picture of the Day</h1>
					<Link to="/apodgallery" className='apod-link'>
						<p>30 Day History</p>
						<br />
					</Link>
					<div className='apod-img-div'>
						<img src={apodData[apodData.length - 1].url} alt={apodData[apodData.length - 1].title} />
					</div>
					<h2>{apodData[apodData.length - 1].title}</h2>
					<p>{apodData[apodData.length - 1].explanation}</p>
				</div>
			</div>
		)
	}
}