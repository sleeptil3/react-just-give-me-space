import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import carlSagan from '../images/carlsagan.jpg'

export default function Home({ apodData }) {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (!apodData.length) {
		return ''
	} else {
		return (
			<div className='Home fadeIn'>
				<h1>Welcome.</h1>
				<p>
					Welcome to JUST GIVE ME SPACE, a website for space nerds. Feel free to explore and I hope you enjoy the site! You'll find a a dark sky forecast page that will display the viewing conditions in your chosen locale, a SpaceX information page, a gallery of astronomy pictures, and a collection of films that revolve around space themes, 'orbit' pun intended.
				</p>
				<p>
					I hope you enjoy the content on this website. May you always find dark skies and a big telescope waiting.
				</p>
				<p>
					<span className='heavy'>-Shawn</span>
				</p>
				<div className='quote'>
					<div>
						<h2><ImQuotesLeft className='quote-icon' />If you wish to make an apple pie from scratch, you must first invent the universe<ImQuotesRight className='accent-color quote-icon' /></h2>
						<h2 className='light'>-Carl Sagan</h2>
					</div>
					<img src={carlSagan} />
				</div>

				<div className='apod-div'>
					<h1>Astronomy Picture of the Day</h1>
					<Link to="/apodgallery" className='apod-link'>
						<p>View Gallery</p>
					</Link>
					<div className='apod-img-div'>
						<img src={apodData[apodData.length - 1].url} alt={apodData[apodData.length - 1].title} />
					</div>
					<h3>{apodData[apodData.length - 1].title}</h3>
					<p>{apodData[apodData.length - 1].explanation}</p>
				</div>
			</div>
		)
	}
}