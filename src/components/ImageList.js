import React from 'react';
// import './ImageList.css';


const ImageList =({images}) =>  { // получение списка изображений через props
	// Отрисовка списка изображений
	return (
		<div className="image-list">
			{images.map(image => (
				<div key={image.id} className='image-container'>
					<img src={image.urls.small} alt={image.description} className='image'/>
				</div>
			))}
			
		</div>
	)
}

export default ImageList;

