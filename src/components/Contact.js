import '../styles/Contact.css';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
	
const Contact = () => {
	const form = useRef();
	const name = useRef();
	const phone = useRef();
	const email = useRef();
	const msg = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		if (name.current.value && phone.current.value && email.current.value && msg.current.value ) {
			emailjs.sendForm('service_wov1xdi', 'template_chd6a08', form.current, 'e6hSApDtFD4z9vEk8')
				.then(() => {
					console.log('Email sent successfully');
				}, (error) => {
					console.log(error, 'Unable to send email');
				});
		} else {
			msg.current.placeholder = 'Please fill out all fields before submitting'
		}
	};

	return (
		<div className='contact-page'>
            <img className='sparkle-pic' src='../assets/sparkle.jpg' alt='An out of focus photo of pink lights in a purple sky'/>
                <div className='contact-box'>
					<form className='contact-form' ref={form} onSubmit={sendEmail}>
						<div className='form-box'>
							<div className='form-labels'>
								<label className='info-label' for='user_name'>Name</label>
								<label className='info-label' for='user_phone'>Phone Number</label>
								<label className='info-label' for='user_email'>Email</label>
								<label className='info-label message-label' for='message'>What can I help you with?</label>
								
							</div>
							<div className='form-inputs'>
								<input className='user-input' ref={name} type="text" id='user_name' name="user_name" />
								<input className='user-input' ref={phone} type="tel" id='user-phone' name="user_phone" />
								<input className='user-input' ref={email} type="email" id='user_email' name="user_email" />
								<textarea className='user-input' ref={msg} id='message' name="message" />
								<input className='submit-btn' type="submit" value="Send" />
							</div>
						</div>
					</form>
                    
                </div>
			</div>
	);
};

export default Contact;