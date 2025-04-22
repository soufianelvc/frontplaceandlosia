

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../../images/Dinner.jpg';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import './RepasGallery.css';

const RepasGallery = ({ dataR }) => {
    const images = [
        {
            original: `http://placeandalosia.free.nf/images/${dataR.img1}`,
        },
        {
            original: `http://placeandalosia.free.nf/images/${dataR.img2}`,
        },
        {
            original: `http://placeandalosia.free.nf/images/${dataR.img3}`,
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
