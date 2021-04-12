import { useState, useEffect } from 'react'
import LaunchInfo from '../../Components/SpaceX/LaunchInfo'
import { motion } from "framer-motion"

export default function UpcomingLaunches() {
	const [upcomingLaunches, setUpcomingLaunches] = useState()
	const getUpcomingLaunchData = async () => {
		try {
			const res = await fetch(`https://api.spacexdata.com/v4/launches/upcoming`)
			const data = await res.json()
			setUpcomingLaunches(data)
			console.log(data)
		} catch (err) {
			alert(err)
		}
	}
	useEffect(() => {
		getUpcomingLaunchData()
	}, [])

	if (!upcomingLaunches || upcomingLaunches.length > 0) {
		return (
			<motion.div animate={{ opacity: 1 }} transition={{ from: 0, ease: "easeOut", duration: 1 }} className='UpcomingLaunches fadeIn'>
				<h1>Upcoming Launches</h1>
				{upcomingLaunches ? upcomingLaunches.map(launch => {
					return (
						<div className='launches-div' key={launch.id}>
							<LaunchInfo data={launch} />
						</div>
					)
				}) : (<h2>Loading</h2>)
				}
			</motion.div>

		)
	} else {
		return <h2>Loading</h2>
	}
}
