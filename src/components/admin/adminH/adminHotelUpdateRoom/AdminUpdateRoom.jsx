import React, { useState, useEffect } from 'react';
import avatar from '../../../../images/avatar.png';
import './AdminUpdateRoom.css';
import { axiosClient } from '../../../../redux/axios';
import ImageUploading from 'react-images-uploading';
import { useNavigate } from 'react-router-dom';

const AdminUpdateRoom = ({ rm }) => {
  const navigate = useNavigate();
  const { id } = rm;
  const [img, setImg] = useState(rm.image ? `http://localhost:8000/images/${rm.image}` : avatar);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [typech, setTypech] = useState(rm.typech);
  const [price, setPrice] = useState(rm.price);
  const [sizech, setSizech] = useState(rm.sizech);
  const [rating, setRating] = useState(rm.rating);
  const [hotelId, setHotelId] = useState(rm.hotelId);
  const [numberChildren, setNumberChildren] = useState(rm.numberChildren);
  const [numberAdult, setNumberAdult] = useState(rm.numberAdult);
  const [numberR, setNumberR] = useState(rm.numberR);
  const [TitleR, setTitleR] = useState(rm.TitleR);
  const [detailsR1, setDetailsR1] = useState(rm.detailsR1);
  const [detailsR2, setDetailsR2] = useState(rm.detailsR2);
  const [detailsR3, setDetailsR3] = useState(rm.detailsR3);
  const [images, setImages] = useState([]);
  const [T, setT] = useState(false);
  const maxNumber = 6;

  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= 6; i++) {
      if (rm[`img${i}`]) {
        loadedImages.push({ file: null, data_url: `http://localhost:8000/images/${rm[`img${i}`]}` });
      }
    }
    setImages(loadedImages);
  }, [rm]);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const handleImageChange = (e) => {
    e.preventDefault(); // Prevent form submission
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFiles(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('_method', 'PUT'); // For Laravel to recognize the update method
      formData.append('typech', typech);
      formData.append('price', price);
      formData.append('sizech', sizech);
      formData.append('dispo', 1); // or get the actual value from state if applicable
      formData.append('rating', rating);
      formData.append('hotelId', hotelId);
      formData.append('numberChildren', numberChildren);
      formData.append('numberAdult', numberAdult);
      formData.append('numberR', numberR);
      formData.append('TitleR', TitleR);
      formData.append('detailsR1', detailsR1);
      formData.append('detailsR2', detailsR2);
      formData.append('detailsR3', detailsR3);
      
      if (selectedFiles) {
        formData.append('image', selectedFiles);
      }
  
      images.forEach((image, index) => {
        if (image.file) {
          formData.append(`img${index + 1}`, image.file);
        }
      }); 
  
      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post(`http://localhost:8000/api/rooms/${rm.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.status);
      // Uncomment the following lines if needed
      if (T===true) {
          
        navigate('/management_rooms');
      setT(false)
      }
      
      // alert('Updated successfully');
  
    } catch (error) {
      console.error('Update failed:', error.response.data);
    }
  };

  const imageStyle = {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
  };

  return (
    <div>
      <div className="row justify-content-start adminhaddRR">
        <div className="admin-content-text pb-4 mt-3">Update Room</div>
        <div className="col-sm-9">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="text-form pb-2">Picture of the Room</div>
            <div>
              <label htmlFor="upload-photo">
                <img src={img} alt="fzx" height="100px" width="120px" style={{ cursor: 'pointer' }} />
                <input type="file" name="photo" onChange={handleImageChange} id="upload-photo" className="d-none" />
              </label>
            </div>

            <input type="text" className="input-form d-block mt-3 px-3" name="typech" placeholder="Type Room" value={typech} onChange={(e) => setTypech(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="price" placeholder="Price DH" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="TitleR" placeholder="Title Room" value={TitleR} onChange={(e) => setTitleR(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="sizech" placeholder="Size Room" value={sizech} onChange={(e) => setSizech(e.target.value)} />
            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsR1" placeholder="Description 1" value={detailsR1} onChange={(e) => setDetailsR1(e.target.value)} />
            <input type="number" className="input-form d-block mt-3 px-3" name="rating" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
            <select name="hotelId" className="select input-form-area d-block mt-3 px-5" value={hotelId} onChange={(e) => setHotelId(e.target.value)}>
              <option value="1">Fes</option>
              <option value="2">Casa</option>
              <option value="3">Marrakech</option>
            </select>

            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsR2" placeholder="Description 2" value={detailsR2} onChange={(e) => setDetailsR2(e.target.value)} />

            <div className="d-flex justify-content-between mt-2">
              <input type="number" className="input-form px-1 mx-1" name="numberAdult" placeholder="Number Adult" value={numberAdult} onChange={(e) => setNumberAdult(e.target.value)} />
              <input type="number" className="input-form px-1 mx-1" name="numberR" placeholder="Number Room" value={numberR} onChange={(e) => setNumberR(e.target.value)} />
              <input type="number" className="input-form px-1 mx-1" name="numberChildren" placeholder="Number Children" value={numberChildren} onChange={(e) => setNumberChildren(e.target.value)} />
            </div>

            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsR3" placeholder="Description 3" value={detailsR3} onChange={(e) => setDetailsR3(e.target.value)} />

            <div className="container ms-0 mt-3">
              <div className="card">
                <div className="card-header">
                  <h4>Images</h4>
                </div>
                <div className="card-body">
                  <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                      <div className="upload__image-wrapper text-center">
                        <button className={`btn btn-primary ${isDragging ? 'bg-danger' : ''}`} onClick={onImageUpload} {...dragProps}>
                          Add images
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={onImageRemoveAll}>
                          Remove all images
                        </button>
                        <div className="row mt-4">
                          {imageList.map((image, index) => (
                            <div key={index} className="col-md-3 mb-4">
                              <div className="card">
                                <img src={image['data_url']} alt="" className="card-img-top" style={imageStyle} />
                                <div className="card-body">
                                  <button className="btn btn-warning btn-sm ms-0 mb-2" onClick={() => onImageUpdate(index)}>
                                    Update
                                  </button>
                                  <button className="btn btn-danger btn-sm w-auth" onClick={() => onImageRemove(index)}>
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

            <button type="submit" className="btn-save d-inline mt-2" onClick={()=>setT(true)}>Save modifications</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateRoom;
