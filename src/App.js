import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ApodGallery from './Pages/ApodGallery/ApodGallery'
import SpaceX from './Pages/SpaceX/SpaceX'
import DarkSkies from './Pages/DarkSkies/DarkSkies'
import FilmAndTv from './Pages/FilmAndTv/FilmAndTv'
import NavSlider from './Components/NavSlider/NavSlider'
import { start_date, year } from './Data/GeneralData'
import { CgCopyright } from "react-icons/cg";
import './App.css'

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