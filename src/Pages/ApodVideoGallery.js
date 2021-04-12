import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useEffect } from 'react'


export default function ApodGallery({ apodData }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<motion.div animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='ApodVideoGallery fadeIn'>
			<h1>Astronomy Picture of the Day Video Gallery</h1>
			<p><span className='light'>Data Provided by </span><b>NASA</b></p>
			<div className="apod-video-flex">
				{apodData.map(data => {
					return (
						<div className='tile-video-div' key={uuid()}>

							<div className='tile-video'>
								<iframe src={data.url + '&modestbranding=1&color=white&iv_load_policy=3'} alt={data.title} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
							<h3>{data.title}</h3>
						</div>
					)
				})}
			</div>
			<div className='button-div'>
				<Link to="/apodgallery" className='button link'>Back to Photos</Link> <Link to="/" className='button link'>Back to Home</Link>
			</div>
		</motion.div>
	)
}
