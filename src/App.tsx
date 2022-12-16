import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation'

/* 
Данное учебное приложение позволяет осуществлять поиск пользователей Github по username и в случае наличия у пользователя репозитория, выводить информацию о нем на страницу с возможностью добавления репозиториев с избранное. 
*/

function App() {
  return (
   <>
		<Navigation />
		<Routes>
			<Route path='/' element={ <HomePage/>}/>
			<Route path='/favourites' element={ <FavouritesPage/>}/>
		</Routes>
	</>
  );
}

export default App;
