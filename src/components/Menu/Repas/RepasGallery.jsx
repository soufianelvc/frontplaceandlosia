// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
// import mobile from '../../../images/Dinner.jpg'
// import LeftButton from './LeftButton';
// import RightButton from './RightButton';
// const RepasGallery = ({dataR}) => {
//     const images = [
//         {
//             original: `http://localhost:8000/images/${dataR.img1}`,
//         },
//         {
//           original: `http://localhost:8000/images/${dataR.img2}`,
//         },
//         {
//           original: `http://localhost:8000/images/${dataR.img3}`,
//         },
//     ];
//     const renderItem = (item) => (
//       <div className="image-gallery-image ">
//           <img
//               src={item.original}
//               alt=""
//               style={{
//                   width: '400px',  
//                   height: '450px', 
//                   objectFit: 'cover' 
//               }}
//           />
//       </div>
//   );
//     return (
//         <div className="product-gallary-card  align-items-center mx-auto d-flex justfiy-content-around pt-2">
//             <ImageGallery items={images}
//               renderItem={renderItem}
//                 defaultImage={mobile}
//                 showFullscreenButton={false}
//                 isRTL={true}
//                 showPlayButton={false}
//                 showThumbnails={false}
//                 renderRightNav={RightButton}
//                 renderLeftNav={LeftButton}
              
          
        
//             />
//         </div>
//     )
// }

// export default RepasGallery

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../../images/Dinner.jpg';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import './RepasGallery.css';

const RepasGallery = ({ dataR }) => {
    const images = [
        {
            original: `http://localhost:8000/images/${dataR.img1}`,
        },
        {
            original: `http://localhost:8000/images/${dataR.img2}`,
        },
        {
            original: `http://localhost:8000/images/${dataR.img3}`,
        },
    ];

    const renderItem = (item) => (
        <div className="image-gallery-image">
            <img
                src={item.original}
                alt=""
                className="gallery-image"
            />
        </div>
    );

    return (
        <div className="product-gallery-card">
            <ImageGallery
                items={images}
                renderItem={renderItem}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    );
}

export default RepasGallery;
