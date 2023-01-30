import '../styles/MainPage.css';
import { NavLink } from 'react-router-dom'

const MainPage = () => {
		return (
			<div className='main-page'>
                <img className='sparkle-pic' src='../assets/sparkle.jpg' alt='An out of focus photo of pink lights in the sky'/>
                <div className='main-box'>
                    <p className='title-text'>
                        I believe that everyone deserves healing
                    </p>
                    <p className='main-text'>
                    and has the ability to grow.
                    </p>
                    <p className='main-subtext'>
                    I'd like to help you get there.
                    </p>
                    <section className='main-card'>
                        <p className='main-card-text'>
                                I offer <b>individual sessions</b> where we can work 1-on-1 to meet your personal needs and bring peace and joy to your life.
                        </p>
                        <p className='main-card-text'>
                                I also offer <b>couples sessions</b> where I will work with you and your partner to strengthen your bond and help you to better understand each other's needs and communicate in more effective ways.
                        </p>
                    </section>
                    <NavLink to='about'><button className='main-learn-btn'>LEARN MORE</button></NavLink>
                </div>
			</div>
		)
}

export default MainPage;