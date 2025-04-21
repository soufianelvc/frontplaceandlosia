import  { useState } from 'react';
import ImageUploading from 'react-images-uploading';

function ImageUploader() {
  const [images, setImages] = useState([]);
  const maxNumber = 6;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <div className="container w-75 ms-0 mt-3 ">
      <div className="card">
        <div className="card-header">
          <h4>Images </h4>
        </div>
        <div className="card-body">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper text-center">
                <button
                  className={`btn btn-primary ${isDragging ? 'bg-danger' : ''}`}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  add images 
                </button>
                &nbsp;
                <button className="btn btn-danger" onClick={onImageRemoveAll}>
                  Remove all images
                </button>
                <div className="row mt-4 ">
                  {imageList.map((image, index) => (
                    <div key={index} className="col-md-3 mb-4 ">
                      <div className="card">
                        <img src={image['data_url']} alt="" className="card-img-top" style={imageStyle} />
                        <div className="card-body ">
                          <button
                            className="  btn btn-warning btn-sm ms-0 mb-2"
                            onClick={() => onImageUpdate(index)}
                          >
                            Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm  w-auth"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
