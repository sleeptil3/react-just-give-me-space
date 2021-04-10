import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SkyStats from '../Components/SkyStats'

export default function DarkSkies(props) {
	const [lat, setLat] = useState(null)
	const [long, setLong] = useState(null)
	const [skyData, setSkyData] = useState({})
	const [renderSkyStats, setRenderSkyStats] = useState(false)
	const [showLoading, setshowLoading] = useState(false)

	const getLocationInfo = () => {
		setshowLoading(true)
		navigator.geolocation.getCurrentPosition((position) => {
			setLat(position.coords.latitude)
			setLong(position.coords.longitude)
			getSkyConditions(position.coords.latitude, position.coords.longitude)
		});
	}

	const getSkyConditions = async (lat, long) => {
		try {
			const res = await fetch(`https://www.7timer.info/bin/astro.php?lon=${long}&lat=${lat}&ac=0&unit=british&output=json&tzshift=0`)
			const data = await res.json()
			console.log(data)
			setSkyData(data.dataseries[0])
			setRenderSkyStats(true)
			console.log(data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<div className='DarkSkies fadeIn'>
			<div>
				<h1>DarkSkies</h1>
				<p>You can use this utility to check the astronomy forcast for your location! Be sure to allow location sharing when it pops up for it to work properly.</p>
				<p className='heavy'><span className='light'>Data Provided by </span>7-Timer</p>
			</div>
			<div className='render-div'>
				<div className='button link' onClick={getLocationInfo}>Get My AstroConditions</div>
			</div>
			{ !showLoading ? '' : <SkyStats lat={lat} long={long} renderSkyStats={renderSkyStats} skyData={skyData} />}
			<div className='button-div'>
				<div className=''>
					<Link to="/" className='button link'>Back to Home</Link>
				</div>
			</div>
		</div>
	)
}