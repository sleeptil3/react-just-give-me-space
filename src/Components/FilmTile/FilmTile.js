import { useState, useEffect } from 'react'
import './filmtile.css'

export default function FilmTile(props) {

	const [filmData, setFilmData] = useState({})

	const getFilmData = async () => {
		try {
			const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBKEY}&s=${props.title}`)
			const data = await res.json()
			setFilmData({ ...data.Search[0] })
			console.log(filmData)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getFilmData()
	}, [])

	return (
		<div className='FilmTile'>
			<img src={filmData.Poster} alt={`poster for the movie ${filmData.Title}`} />
			<h1>{filmData.Title} ({filmData.Year})</h1>
		</div>
	)
}