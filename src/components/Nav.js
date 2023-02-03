import '../styles/Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
		return (
			<div className='navigation'>
				<nav className='nav-bar'>
					<div className='nav-left nav-section'>
						<img className='nav-logo' src='../assets/chamomile.png' alt='a logo of a pink chamomile flower'/>
						<p className='nav-title'>KRISTEN RAHBANY MA, LPC</p>
					</div>
					<div className='nav-right nav-section'>
						<NavLink to='/'><button className='home-btn text-btn'>Home</button></NavLink>
						<NavLink to='about'><button className='about-btn text-btn'>About</button></NavLink>
						<NavLink to='contact'><button className='contact-btn'>CONTACT ME</button></NavLink>
					</div>
				</nav>
			</div>
		)
}

export default Nav;