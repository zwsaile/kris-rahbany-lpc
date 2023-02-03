import '../styles/About.css';
import Bio from './Bio'
import Credentials from './Credentials';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const About = () => {
		return (
			<div className='about-page'>
                <img className='sparkle-pic' src='../assets/sparkle.jpg' alt='An out of focus photo of pink lights in the sky'/>
                <div className='about-card'>
                    <img className='kris-pic' src='../assets/kris.JPEG' alt='A headshot of Kristen Rahbany sitting in a leather chair'/>
                    <div className='about-tabs'>
                        <Tabs
                            defaultActiveKey="bio"
                            id="about-tab-section"
                            className="about-tab-section"
                            justify
                        >
                            <Tab className='tabs' eventKey="bio" title="Bio">
                                <Bio />
                            </Tab>
                            <Tab className='tabs' eventKey="credentials" title="Credentials">
                                <Credentials />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
			</div>
		)
}

export default About;