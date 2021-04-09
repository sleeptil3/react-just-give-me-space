import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ApodGallery from './Pages/ApodGallery/ApodGallery'
import SpaceX from './Pages/SpaceX/SpaceX'
import DarkSkies from './Pages/DarkSkies/DarkSkies'
import FilmAndTv from './Pages/FilmAndTv/FilmAndTv'
import NavBar from './Components/NavBar/NavBar'
import { start_date, year } from './Data/GeneralData'
import { CgCopyright } from "react-icons/cg";
import headerBkg from './images/header-bkg.jpeg'
import loading from './images/loading.gif'
import './App.css'

//logic to get date 30 days ago in correct format for API

function App() {
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
		getApodData()
	}, [])

	// if (!apodData.length) {
	// 	return <img className='main-loading center' src={loading} alt='Loading Website...' />
	// } else {
	return (
		<div className="App">
			<header>
				<div className='header-div' style={{ backgroundImage: `url(${headerBkg})` }}>
					<div>
						<h1 className=''>just give me <span className='space'>SPACE</span></h1>
						<p className=''>A Website for <span className='nerds'>Space Nerds</span></p>
					</div>
				</div>
				<NavBar />
			</header>
			<main>
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
// }

export default App;
