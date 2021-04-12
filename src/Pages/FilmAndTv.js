import { Link } from 'react-router-dom'
import FilmTile from '../Components/FilmTile'
import { films } from '../Data/GeneralData'
import { motion } from 'framer-motion'
import { useEffect } from 'react'


export default function FilmAndTv() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} className='FilmAndTv'>
			<h1>Space-related Film and TV</h1>
			<p>Below find a small collection of amazing films and television shows that feature space as the main theme.</p>
			<p><span className='light'>Data Provided by </span><b>OMDb</b></p>

			<motion.div animate={{ opacity: 1 }} transition={{ from: 0, duration: 1 }} className='films-div'>
				{
					films.map(film => (
						<FilmTile title={film} />
					))
				}
			</motion.div>
			<div className='button-div' id='tv-home'>
				<Link to="/" className='button link'>Back to Home</Link>
			</div>
		</motion.div>
	)
}