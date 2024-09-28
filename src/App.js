import './App.css';
import axios from 'axios'; // библиотека для выполнения HTTP запросов
import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';


function App() {
const [images, setImages] = useState([]); // создание состояния для хранения списка изображений
const [query, setQuery] = useState(''); // создание состояния для хранения списка изображений

// Обработчик изменения строки поиска
const onInputChange = (e) => {
		setQuery(e.target.value);
	}

// Функция для поиска изображений по строке поиска или вводе рандомных, если строка пуста
const searchImages = async () => {
	const url = query 
	? `https://api.unsplash.com/search/photos?query=${query}`
	: 'https://api.unsplash.com/photos/random?count=10';

	try {
		const response = await axios.get(url, {
			headers: {
				Authorization: 'YOUR_ACCESS_KEY', // заменить на Ваш ключ доступа
			}
		})
		const imagesData = query ? response.data.results :response.data;
		setImages(imagesData); // Обновление состояние изображения
	} catch (error) {
		console.error("Ошибка при выполнении запроса", error);
	}
};
useEffect(() => {
	searchImages(); // Загрузка рандомных изображений при монтировании компонента
},[]) // Эффект будет вызван 1 раз при монтировании

	return (
		//обертка для всего приложения
		<div style= {{ textAlign: 'center', padding: '10px'}}>
		<h1 style= {{ fontSize: '2rem'}}>Галлерея Unsplash</h1>
		<input type="text" value={query} onChange={onInputChange} placeholder='Search...'/>
		<button onClick={searchImages}>Search</button>
		<ImageList images={images}/> 
		{/* Передача списка изображений в компонент ImageList */}
			
		</div>
	)
}

export default App;