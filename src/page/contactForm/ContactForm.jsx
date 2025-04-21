// import './ContactForm.css' ; 
// import { addMessage } from '../../redux/reducers/MessagesSlice';
// import { useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import support from '../../../public/support.json'
// import Lottie from "lottie-react";
// const ContactForm = () => {
//   const lottiRef = useRef();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const dispatch = useDispatch();
//   const { items: messages, status, error } = useSelector((state) => state.messages);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(addMessage(formData)).unwrap();
//       alert('Message sent successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('There was an error sending the message!', error);
//       alert('error!!!!')
      
//     }
//   };

//   return (
//     <div className="content">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-10">
//             <div className="row justify-content-center">
//               <div className="col-md-6">
//                 <h3 className="heading mb-4">Let's talk about everything!</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natuss?</p>
//                 <Lottie 
//                   animationData={support} 
//                   onLoadedImages={() => {lottiRef.current.setSpeed(0.1)}}  
//                   lottieRef={lottiRef}
//                   className='dev-animation' />
//               </div>
//               <div className="col-md-6">
//                 <form className="mb-5" onSubmit={handleSubmit} noValidate>
//                   <div className="row">
//                     <div className="col-md-12 form-group">
//                       <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 form-group">
//                       <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 form-group">
//                       <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 form-group">
//                       <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} cols="30" rows="7" placeholder="Write your message"></textarea>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <input type="submit" value="Send Message" className=" btn-primaryy rounded-0 py-2 px-4" />
//                       <span className="submitting"></span>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default ContactForm;

import './ContactForm.css';
import { addMessage } from '../../redux/reducers/MessagesSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import support from '../../../public/support.json';
import Lottie from "lottie-react";

const ContactForm = () => {
  const lottiRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const dispatch = useDispatch();
  const { items: messages, status, error } = useSelector((state) => state.messages);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addMessage(formData)).unwrap();
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('There was an error sending the message!', error);
      alert('Error sending the message.');
    }
  };
  const [theme,setTheme]= useState('bg-light');
  const darkMode = useSelector((state) => state.theme.darkMode)
  useEffect(() => {
    if (darkMode==true) {
      setTheme('bg-black')
    }
    else{
      setTheme('bg-light')
    }
  }, [darkMode]);

  return (
    <div className="content" style={{ backgroundColor: theme === 'bg-light' ? 'white' : 'black' }}  >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3 className="heading mb-4 lets">Let's talk about everything!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natuss?</p>
                <Lottie 
                  animationData={support} 
                  onLoadedImages={() => {lottiRef.current.setSpeed(0.1)}}  
                  lottieRef={lottiRef}
                  className='dev-animation' 
                />
              </div>
              <div className="col-md-6">
                <form className="mb-5" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your name" 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Email" 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Subject" 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea 
                        className="form-control" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        cols="30" 
                        rows="7" 
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input 
                        type="submit" 
                        value="Send Message" 
                        className="btn-primaryy rounded-0 py-2 px-4" 
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

