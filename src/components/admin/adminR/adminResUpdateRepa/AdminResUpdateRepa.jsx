

import React, { useState, useEffect } from 'react';
import avatar from '../../../../images/avatar.png';
import './adminResUpdateRepa.css';
import { axiosClient } from '../../../../redux/axios';
import ImageUploading from 'react-images-uploading';
import { useNavigate } from 'react-router-dom';

const AdminResUpdateRepa = ({ repas = {} }) => {
  const navigate = useNavigate();
  const { id, image = '', name = '', price = '', description = '', category = '', rating = '', digitalType = '', stock = '', title = '' } = repas;
  const [img, setImg] = useState(image ? `http://placeandalosia.free.nf/images/${image}` : avatar);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [mealName, setMealName] = useState(name);
  const [mealPrice, setMealPrice] = useState(price);
  const [mealDescription, setMealDescription] = useState(description);
  const [mealCategory, setMealCategory] = useState(category);
  const [mealRating, setMealRating] = useState(rating);
  const [mealDigitalType, setMealDigitalType] = useState(digitalType);
  const [mealStock, setMealStock] = useState(stock);
  const [mealTitle, setMealTitle] = useState(title); // Added title state
  const [images, setImages] = useState([]);
  const [T, setT] = useState(false);
  const maxNumber = 6;

  useEffect(() => {
    if (repas) {
      const loadedImages = [];
      for (let i = 1; i <= 6; i++) {
        if (repas[`img${i}`]) {
          loadedImages.push({ file: null, data_url: `http://placeandalosia.free.nf/images/${repas[`img${i}`]}` });
        }
      }
      setImages(loadedImages);
    }
  }, [repas]);

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
      formData.append('name', mealName);
      formData.append('price', mealPrice);
      formData.append('description', mealDescription);
      formData.append('category', mealCategory);
      formData.append('rating', mealRating);
      formData.append('digitalType', mealDigitalType);
      formData.append('stock', mealStock);
      formData.append('title', mealTitle); // Ensure title is included
      
      if (selectedFiles) {
        formData.append('image', selectedFiles);
      }
  
      images.forEach((image, index) => {
        if (image.file) {
          formData.append(`img${index + 1}`, image.file);
        }
      }); 
  
      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post(`http://placeandalosia.free.nf/api/repas/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.status);
      if (T === true) {
        navigate('/management_repas');
        setT(false);
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
        <div className="admin-content-text pb-4 mt-3">Update Meal</div>
        <div className="col-sm-9">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="text-form pb-2">Picture of the Meal</div>
            <div>
              <label htmlFor="upload-photo">
                <img src={img} alt="fzx" height="100px" width="120px" style={{ cursor: 'pointer' }} />
                <input type="file" name="photo" onChange={handleImageChange} id="upload-photo" className="d-none" />
              </label>
            </div>

            <input type="text" className="input-form d-block mt-3 px-3" name="name" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="price" placeholder="Price DH" value={mealPrice} onChange={(e) => setMealPrice(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="category" placeholder="Category" value={mealCategory} onChange={(e) => setMealCategory(e.target.value)} />
            <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="description" placeholder="Description" value={mealDescription} onChange={(e) => setMealDescription(e.target.value)} />
            <input type="number" className="input-form d-block mt-3 px-3" name="rating" placeholder="Rating" value={mealRating} onChange={(e) => setMealRating(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="digitalType" placeholder="Digital Type" value={mealDigitalType} onChange={(e) => setMealDigitalType(e.target.value)} />
            <input type="number" className="input-form d-block mt-3 px-3" name="stock" placeholder="Stock" value={mealStock} onChange={(e) => setMealStock(e.target.value)} />
            <input type="text" className="input-form d-block mt-3 px-3" name="title" placeholder="Title" value={mealTitle} onChange={(e) => setMealTitle(e.target.value)} /> {/* Added title input */}

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

export default AdminResUpdateRepa;