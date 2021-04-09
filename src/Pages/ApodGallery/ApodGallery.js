import { Link } from 'react-router-dom'
import { useState } from 'react'
import ApodModal from '../../Components/ApodModal/ApodModal'
import { v4 as uuid } from 'uuid'
import './apodgallery.css'


export default function ApodGallery({ apodData }) {
	const [showModal, setShowModal] = useState(false);
	let [currentObject, setCurrentObject] = useState({});

	const handleClick = (e) => {
		setShowModal(!showModal)
		if (Object.values(currentObject).length === 0) {
			setCurrentObject(apodData.find(object => object.url === e.target.currentSrc))
		} else {
			setCurrentObject({})
		}
		console.log(`Show Modal: ${showModal}`)
	}

	return (
		<div className='ApodGallery'>
			<h1>Astronomy Picture of the Day Gallery</h1><br />
			<p><span className='light'>Data Provided by </span><b>NASA</b></p>
			<div className="apod-flex">
				{apodData.map(data => {
					if (data.media_type === 'video') {
						return ''
					}
					return (
						<div className='tile-div' key={uuid()}>
							<div className='tile-link' onClick={handleClick}>
								<img src={data.url} className='tile-img' alt={data.title} />
							</div>
							<h4>{data.title}</h4>
						</div>
					)
				})}
			</div>
			<div className='button-div'>
				<Link to="/" className='button link'>Back to Home</Link>
			</div>
			<ApodModal handleClick={handleClick} showModal={showModal} data={currentObject} />
		</div>
	)
}
