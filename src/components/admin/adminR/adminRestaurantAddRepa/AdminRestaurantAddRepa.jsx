import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import './adminRestaurantAddRepa.css'; // Ensure this file exists for styling
import { axiosClient } from '../../../../redux/axios';

const AdminRestaurantAddRepa = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating: '',
    title: '',
    name: '',
    price: '',
    digitalType: '',
    category: '',
    stock: '',
    details1: '',
    details2: '',
    image: null,
  });
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setImage(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onImageChange = (imageList) => {
    setImages(imageList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('rating', formData.rating);
    data.append('title', formData.title);
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('digitalType', formData.digitalType);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    data.append('details1', formData.details1);
    data.append('details2', formData.details2);

    if (image) {
      data.append('image', image);
    }

    images.forEach((img, index) => {
      data.append(`img${index + 1}`, img.file);
    });

    try {
      await axiosClient.get('/sanctum/csrf-cookie');
      await axiosClient.post('http://placeandalosia.free.nf/api/repas', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // navigate('/management_repas');
    } catch (error) {
      console.error('Failed to create repas:', error);
    }
  };

  return (
    // <div className="admin-add-repa">
    //   <h2>Add New Repas</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="number"
    //       name="rating"
    //       placeholder="Rating"
    //       value={formData.rating}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="title"
    //       placeholder="Title"
    //       value={formData.title}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Name"
    //       value={formData.name}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="number"
    //       name="price"
    //       placeholder="Price"
    //       value={formData.price}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="digitalType"
    //       placeholder="Digital Type"
    //       value={formData.digitalType}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="category"
    //       placeholder="Category"
    //       value={formData.category}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="number"
    //       name="stock"
    //       placeholder="Stock"
    //       value={formData.stock}
    //       onChange={handleChange}
    //     />
    //     <textarea
    //       name="details1"
    //       placeholder="Details 1"
    //       value={formData.details1}
    //       onChange={handleChange}
    //     ></textarea>
    //     <textarea
    //       name="details2"
    //       placeholder="Details 2"
    //       value={formData.details2}
    //       onChange={handleChange}
    //     ></textarea>
    //     <input
    //       type="file"
    //       name="image"
    //       onChange={handleChange}
    //     />
    //     <ImageUploading
    //       multiple
    //       value={images}
    //       onChange={onImageChange}
    //       maxNumber={3}
    //     >
    //       {({
    //         imageList,
    //         onImageUpload,
    //         onImageRemoveAll,
    //         onImageUpdate,
    //         onImageRemove,
    //         isDragging,
    //         dragProps,
    //       }) => (
    //         <div>
    //           <button
    //             type="button"
    //             style={isDragging ? { color: 'red' } : undefined}
    //             onClick={onImageUpload}
    //             {...dragProps}
    //           >
    //             Upload Images
    //           </button>
    //           <button type="button" onClick={onImageRemoveAll}>
    //             Remove All Images
    //           </button>
    //           <div>
    //             {imageList.map((image, index) => (
    //               <div key={index} className="image-item">
    //                 <img src={image.data_url} alt="" width="100" />
    //                 <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
    //                 <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       )}
    //     </ImageUploading>
    //     <button type="submit">Save Repas</button>
    //   </form>
    // </div>
    <div className="admin-add-repa">
      <h2>Add New Repas</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-formR"
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <input className="input-formR"
        
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input className="input-formR"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input className="input-formR"
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input className="input-formR"
          type="text"
          name="digitalType"
          placeholder="Digital Type"
          value={formData.digitalType}
          onChange={handleChange}
        />
        <input className="input-formR"
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input className="input-formR"
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />
        <textarea
          name="details1"
          placeholder="Details 1"
          value={formData.details1}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="details2"
          placeholder="Details 2"
          value={formData.details2}
          onChange={handleChange}
        ></textarea>
        <input 
          type="file"
          name="image"
          onChange={handleChange}
        />
        <ImageUploading
          multiple
          value={images}
          onChange={onImageChange}
          maxNumber={6}
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
            <div className="upload__image-wrapper">
              <button
                type="button"
                className={`btn-primary ${isDragging ? 'dragging bbb' : ' bbb'}`}
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload Images
              </button>
              <button type="button" className="btn-danger" onClick={onImageRemoveAll} className="bbb">
                Remove All Images
              </button>
              <div>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" /> <br />
                    <button type="button" onClick={() => onImageUpdate(index)} className=' bbb btn btn-warning btn-sm ms-0 mb-2 w-50'>Update</button>
                    <button type="button" onClick={() => onImageRemove(index)} className='bbb btn btn-danger btn-sm  w-50'>Remove</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
        <button type="submit" className='bbb'>Save Repas</button>
      </form>
    </div>
  );
};

export default AdminRestaurantAddRepa;
