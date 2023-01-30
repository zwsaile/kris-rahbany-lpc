import './styles/App.css';
import Nav from './components/Nav'
import MainPage from './components/MainPage'
import Contact from './components/Contact'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
      	<div className="app">
        	<Nav />
			<Routes>
				<Route exact path='/' element={<MainPage/>}/>
				<Route exact path='/about' element={<About/>}/>
				<Route exact path='/contact' element={<Contact/>}/>
			</Routes>
      	</div>
    );
}

export default App;
