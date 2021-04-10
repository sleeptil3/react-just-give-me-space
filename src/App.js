import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import ApodGallery from './Pages/ApodGallery'
import SpaceX from './Pages/SpaceX'
import DarkSkies from './Pages/DarkSkies'
import FilmAndTv from './Pages/FilmAndTv'
import NavSlider from './Components/NavSlider'
import saturn from './images/saturn.png'
import { start_date, year } from './Data/GeneralData'
import { CgCopyright } from "react-icons/cg";

export default function App() {
	const [apodData, setApodData] = useState([])

	const getApodData = async () => {
		console.log('Beginning APOD API Fetch')
		const apiUrl = 'https://api.nasa.gov/planetary/apod?'
		try {
			const res = await fetch(`${apiUrl}start_date=${start_date}&api_key=${process.env.REACT_APP_APODKEY}`)
			const data = await res.json()
			console.log(data)
			setApodData(data)
		} catch (err) {
			console.error(`Fetch error: ${err}`);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
		getApodData()
	}, [])

	return (
		<div className="App">
			<div className='stars'></div>
			<header>
				<div className='header-div'>
					<div>
						<h1 className='site-heading'>just give me <span className='space'>SPACE</span></h1>
						<p className='site-sub'>A Website for <span className='nerds'>Space Nerds</span></p>
					</div>
				</div>
				<img src={saturn} alt='saturn next to the site title' />
			</header>
			<main>
				<NavSlider />
				<Switch>
					<Route path='/' exact render={(routerProps) => <Home {...routerProps} apodData={apodData} />} />
					<Route path='/apodgallery' exact render={(routerProps) => <ApodGallery {...routerProps} apodData={apodData} />} />
					<Route path='/darkskies' component={DarkSkies} />
					<Route path='/filmandtv' component={FilmAndTv} />
					<Route path='/spacex' component={SpaceX} />
				</Switch>
			</main>
			<footer className='fadeInPause'>
				{apodData.length > 1 ? <p className='footer-p'>Web Design <CgCopyright className='copyright' />{year} • Shawn Clary • Sleeptil3Software</p> : ''}
			</footer>
		</div>
	)
}