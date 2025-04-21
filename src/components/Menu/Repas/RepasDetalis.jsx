
import { useLocation } from 'react-router-dom';
import RepasGallery from './RepasGallery'
import RepasText from './RepasText'

const RepasDetalis = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div className=' row my-3 d-flex border ' style={{width:"94%"}}>
        <div className='col lg-4'>
            <RepasGallery dataR={state.elm}/>
        </div>
        <div className='col lg-8'>
           <RepasText dataR={state.elm}/>
        </div>
    </div>
  )
}

export default RepasDetalis;
