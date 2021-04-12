import { FaWindowClose } from "react-icons/fa";


export default function ApodModal(props) {
	console.log(props)

	if (!props.showModal) {
		return null
	} else {
		return (
			<div className='ApodModal center fadeIn1' >
				<div className='modal-title-div' onClick={props.handleClick}>
					<FaWindowClose className='close' />
					<h1>{props.data.title}</h1>
				</div>
				<img src={props.data.url} alt={props.data.title} />
				<p>{props.data.explanation}</p>
				<a href={props.data.hdurl} id='download' target="_blank" rel="noreferrer" >
					<h3>Download Hi-Def Version</h3>
				</a>
			</div>
		)
	}
}
