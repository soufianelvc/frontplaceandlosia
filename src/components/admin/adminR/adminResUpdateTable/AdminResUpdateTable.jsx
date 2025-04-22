import React, { useState, useEffect } from 'react';
import avatar from '../../../../images/avatar.png';
// import './AdminUpdateRoom.css';
import { axiosClient } from '../../../../redux/axios';
import ImageUploading from 'react-images-uploading';
import { useNavigate } from 'react-router-dom';

const AdminResUpdateTable = ({ tbl }) => {
  const navigate = useNavigate();
  // const { id } = tbl;
  const [img, setImg] = useState(tbl.images ? `http://placeandalosia.free.nf/images/${tbl.images}` : avatar);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [types, setTypes] = useState(tbl.types);
  const [rating, setRating] = useState(tbl.rating);
  const [hotelId, setHotelId] = useState(tbl.hotelId);
  const [dispo, setDispo] = useState(tbl.dispo);
  const [TitleT, setTitleT] = useState(tbl.TitleT);
  const [detailsT1, setDetailsT1] = useState(tbl.detailsT1);
  const [detailsT2, setDetailsT2] = useState(tbl.detailsT2);
  const [detailsT3, setDetailsT3] = useState(tbl.detailsT3);
  const [numberChildren, setNumberChildren] = useState(tbl.numberChildren);
  const [numberAdult, setNumberAdult] = useState(tbl.numberAdult);
  const [images, setImages] = useState([]);
  const [T, setT] = useState(false);
  const maxNumber = 6;

  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= 6; i++) {
      if (tbl[`img${i}`]) {
        loadedImages.push({ file: null, data_url: `http://placeandalosia.free.nf/images/${tbl[`img${i}`]}` });
      }
    }
    setImages(loadedImages);
  }, [tbl]);

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
      formData.append('types', types);
      formData.append('rating', rating);
      formData.append('hotelId', hotelId);
      formData.append('dispo', dispo);
      formData.append('TitleT', TitleT);
      formData.append('detailsT1', detailsT1);
      formData.append('detailsT2', detailsT2);
      formData.append('detailsT3', detailsT3);
      formData.append('numberChildren', numberChildren);
      formData.append('numberAdult', numberAdult);

      if (selectedFiles) {
        formData.append('images', selectedFiles);
      }

      images.forEach((image, index) => {
        if (image.file) {
          formData.append(`img${index + 1}`, image.file);
        }
      });

      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post(`http://placeandalosia.free.nf/api/tables/${tbl.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.status);
      if (T === true) {
        navigate('/management_tables');
        setT(false);
      }
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
        <div className="admin-content-text pb-4 mt-3">Update Table</div>
        <div className="col-sm-9">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="text-form pb-2">Picture of the Table</div>
            <div>
              <label htmlFor="upload-photo">
                <img src={img} alt="Table" height="100px" width="120px" style={{ cursor: 'pointer' }} />
                <input type="file" name="photo" onChange={handleImageChange} id="upload-photo" className="d-none" />
              </label>
            </div>

            <input type="text" className="input-form d-block mt-3 px-3" name="types" placeholder="Table Type" value={types} onChange={(e) => setTypes(e.target.value)} />
            <input type="number" className="input-form d-block mt-3 px-3" name="rating" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="TitleT" placeholder="Table Title" value={TitleT} onChange={(e) => setTitleT(e.target.value)} />
            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsT1" placeholder="Details 1" value={detailsT1} onChange={(e) => setDetailsT1(e.target.value)} />
            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsT2" placeholder="Details 2" value={detailsT2} onChange={(e) => setDetailsT2(e.target.value)} />
            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsT3" placeholder="Details 3" value={detailsT3} onChange={(e) => setDetailsT3(e.target.value)} />

            <div className="d-flex justify-content-between mt-2">
              <input type="number" className="input-form px-1 mx-1" name="numberChildren" placeholder="Number of Children" value={numberChildren} onChange={(e) => setNumberChildren(e.target.value)} />
              <input type="number" className="input-form px-1 mx-1" name="numberAdult" placeholder="Number of Adults" value={numberAdult} onChange={(e) => setNumberAdult(e.target.value)} />
            </div>

            <select name="hotelId" className="select input-form-area d-block mt-3 px-5" value={hotelId} onChange={(e) => setHotelId(e.target.value)}>
              <option value="1">Hotel 1</option>
              <option value="2">Hotel 2</option>
              <option value="3">Hotel 3</option>
            </select>
            <select name="dispo" className="select input-form-area d-block mt-3 px-5" value={dispo} onChange={(e) => setDispo(e.target.value)}>
              <option value="1">Available</option>
              <option value="0">Unavailable</option>
            </select>

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

            <button type="submit" className="btn-save d-inline mt-2" onClick={() => setT(true)}>Save modifications</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminResUpdateTable;
