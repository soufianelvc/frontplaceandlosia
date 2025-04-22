import  { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VscEyeClosed } from "react-icons/vsc";
import './emails.css';
import { fetchMessages } from '../../../../redux/reducers/MessagesSlice';
import { CiCalendarDate, CiText } from "react-icons/ci";
import { MdAlternateEmail, MdOutlineMessage, MdOutlineSubject } from 'react-icons/md';
import { RiReplyFill } from 'react-icons/ri';
import { Button, Dialog } from '@mui/material';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
const MessageList = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.items);
  const status = useSelector((state) => state.messages.status);
  const error = useSelector((state) => state.messages.error);

  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit =  (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const templateParams = {
      to_email: email,
      message: message,
    };

    // try {
       emailjs.sendForm(
        'service_dxhwi1p',     // Replace with your EmailJS Service ID
        'template_mq134az',    // Replace with your EmailJS Template ID
        templateParams,
        'jS1PneinvCo7T6wRQ'         // Replace with your EmailJS User ID
      );
      alert('Email sent successfully');
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   alert('Failed to send email');
    // }
  };

  const [openAlert, setOpenAlert] = useState(false);
  const handleOpen = async (item) => {
    await setOpenAlert(true);
    emailRef.current.value = item;
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMessages());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      
      <table className="email-table">
    
        <thead>
          
          <tr>

            <th><CiCalendarDate className='iconn' />Date</th>
            <th><CiText className='iconn' />Name</th>
            <th><MdAlternateEmail className='iconn'/>Email</th>
            <th><MdOutlineSubject className='iconn'/>Subject</th>
            <th><MdOutlineMessage className='iconn'/>Message</th>
             
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{new Date(message.created_at).toLocaleDateString()}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>
                <div className='d-flex justify-content-between trask'>
                  <div>{message.message}</div>
                  <div className="icon_Answer">
                    <button onClick={() => handleOpen(message.email)}> <RiReplyFill /></button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <div className="send-email-container " >
        <h2>Send Email</h2>
        <form onSubmit={handleSubmit} className="send-email-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailRef} disabled name="email_from"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" ref={messageRef}></textarea>
          </div>
          <Button className="text-light" onClick={handleClose}>
            <b><VscEyeClosed style={{ fontWeight: '900', color: 'yellow', height: '2rem', width: '1.5rem' }} /></b>
          </Button>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </Dialog>
  );

  return (
    <div>
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className='tablesemailss'>
        <h1 className='tay'>list emails</h1> <h5>{content}</h5></div>
    </div>
  );
};

export default MessageList;
