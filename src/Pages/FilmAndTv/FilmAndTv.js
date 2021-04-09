import { Link } from 'react-router-dom'
import FilmTile from '../../Components/FilmTile/FilmTile'
import { films } from '../../Data/GeneralData'
import './filmandtv.css'

export default function FilmAndTv() {
	return (
		<div className='FilmAndTv fadeIn'>
			<h1>Space-related Film and TV</h1>
			<p>Below find a small collection of amazing films and television shows that feature space as the main theme.</p>
			<p><span className='light'>Data Provided by </span><b>OMDb</b></p>

			<div className='films-div'>
				{
					films.map(film => (
						<FilmTile title={film} />
					))
				}
			</div>
			<div className='button-div' id='tv-home'>
				<Link to="/" className='button link'>Back to Home</Link>
			</div>
		</div>
	)
}
