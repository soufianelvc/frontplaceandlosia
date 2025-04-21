// import  { useState } from 'react';
// import axios from 'axios';
// import avatar from '../../../../images/avatar.png';
// import './AdminAddRoomm.css';
// import { axiosClient } from '../../../../redux/axios';
// import ImageUploading from 'react-images-uploading';
// import { useNavigate } from 'react-router-dom';
// const AdminAddRoom = () => {
//   const navigate = useNavigate();
//   const [img, setImg] = useState(avatar);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [typech, settypech] = useState();
//   const [price, setprice] = useState();
//   const [sizech, setsizech] = useState();
//   // const [dispo, setDispo] = useState(true);
//   const [rating, setrating] = useState();
//   const [hotelId, sethotelId] = useState('');
//   // const [image, setimage] = useState();
//   const [numberChildren, setnumberChildren] = useState();
//   const [numberAdult, setnumberAdult] = useState();
//   const [numberR, setnumberR] = useState();
//   const [TitleR, setTitleR] = useState();
//   const [detailsR1, setdetailsR1] = useState();
//   const [detailsR2, setdetailsR2] = useState();
//   const [detailsR3, setdetailsR3] = useState();

//   const [images, setImages] = useState([]);

//   const maxNumber = 6;
//   const onChange = (imageList, addUpdateIndex) => {
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };
//   console.log(images)
//   console.log(hotelId)

//   const imageStyle = {
//     width: '100%',
//     height: '100px',
//     objectFit: 'cover',
//   }; 
//   // const onImageChange = (event) => {
//   //   if (event.target.files) {
//   //     const files = Array.from(event.target.files);
//   //     setSelectedFiles(files);
//   //     setImg(URL.createObjectURL(files[0]));
//   //   }
//   // };


//   const handleImageChange = (e) => {
//     if (event.target.files && event.target.files[0]) {
//       setImg(URL.createObjectURL(event.target.files[0]))
//       setSelectedFiles(event.target.files[0])
//   }
//   };
//   const handleChange = (event) => {

//     sethotelId(event.target.value);
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
// try {
//   const formData = new FormData();
//   formData.append('typech', typech);
//   formData.append('price', price);
//   formData.append('sizech', sizech);
//   formData.append('dispo', 1);
//   formData.append('rating', rating);
//   formData.append('hotelId', hotelId);
//   formData.append('numberChildren', numberChildren);
//   formData.append('numberAdult', numberAdult);
//   formData.append('numberR', numberR);
//   formData.append('TitleR', TitleR);
//   formData.append('detailsR1', detailsR1);
//   formData.append('detailsR2', detailsR2);
//   formData.append('detailsR3', detailsR3);
//   formData.append('image', selectedFiles);
//   // formData.append('img1', images[0]);
//   // formData.append('img2', images[1]);
//   // formData.append('img3', images[2]); 
//   // formData.append('img4', images[3]);
//   // formData.append('img5', images[4]);
//   // formData.append('img6', images[5]);
//         // Append all selected images to the formData
//         images.forEach((image, index) => {
//           console.log(image);
//           formData.append(`img${index + 1}`, image.file);
//         });
  
//   await axiosClient.get('/sanctum/csrf-cookie');
//   const res =  await axiosClient.post("http://localhost:8000/api/rooms", formData, {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//     },
// })
// console.log(res)
// navigate('/management_rooms');
// } catch (error) {
//   console.error('Registration failed:', error);
// }
//   };

//   return (
//     <div>
//       <div className="row justify-content-start adminhaddRR ">
//         <div className="admin-content-text pb-4 mt-3"> Add a new Room </div>
//         <div className="col-sm-9">
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div className="text-form pb-2"> Picture of the Room </div>
//             <div>
//               <label htmlFor="upload-photo">
//                 <img src={img} alt="fzx" height="100px" width="120px" style={{ cursor: 'pointer' }} />
//                 <input type="file" name="photo"   onChange={handleImageChange}  id="upload-photo" className="d-none" multiple />
//               </label>
//             </div>

//             <input type="text" className="input-form d-block mt-3 px-3" name="typech" placeholder="Type Room" value={typech} onChange={(e) => settypech(e.target.value)} />
//             <input type="text" className="input-form d-block mt-3 px-3" name="price" placeholder="Price DH" value={price} onChange={(e) => setprice(e.target.value)}/>
//             <input type="text" className="input-form d-block mt-3 px-3" name="TitleR" placeholder="Title Room" value={TitleR} onChange={(e) => setTitleR(e.target.value)}/>
//             <input type="text" className="input-form d-block mt-3 px-3" name="sizech" placeholder="Size Room" value={sizech} onChange={(e) => setsizech(e.target.value)}/>
//             <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsR1" placeholder="Description 1" value={detailsR1} onChange={(e) => setdetailsR1(e.target.value)}/>
//             <input type="number" className="input-form d-block mt-3 px-3" name="rating" placeholder="Rating" value={rating} onChange={(e) => setrating(e.target.value)}/>
//             <select name="hotelId" className="select input-form-area d-block mt-3 px-5" value={hotelId}  onChange={handleChange} >
//               <option value="1">Fes</option>
//               <option value="2">Casa</option>
//               <option value="3">Marakech</option>
//             </select>

//             <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsR2" placeholder="Description 2" value={detailsR2} onChange={(e) => setdetailsR2(e.target.value)}/>

//             <div className="d-flex justify-content-between mt-2">
//               <input type="number" className="input-form px-1 mx-1" name="numberAdult" placeholder="Number Adult" value={numberAdult} onChange={(e) => setnumberAdult(e.target.value)}/>
//               <input type="number" className="input-form px-1 mx-1" name="numberR" placeholder="Number Room" value={numberR} onChange={(e) => setnumberR(e.target.value)}/>
//               <input type="number" className="input-form px-1 mx-1" name="numberChildren" placeholder="Number Children" value={numberChildren} onChange={(e) => setnumberChildren(e.target.value)}/>
//             </div>

//             <textarea className="input-form-area p-2 mt-3" rows="4" cols="50" name="detailsR3" placeholder="Description 3" value={detailsR3} onChange={(e) => setdetailsR3(e.target.value)}/>
//             {/* ------------------------------------------------------------------ */}
//             <div className="container  ms-0 mt-3 ">
//       <div className="card">
//         <div className="card-header">
//           <h4>Images </h4>
//         </div>
//         <div className="card-body">
//           <ImageUploading
//             multiple
//             value={images}
//             onChange={onChange}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//           >
//             {({
//               imageList,
//               onImageUpload,
//               onImageRemoveAll,
//               onImageUpdate,
//               onImageRemove,
//               isDragging,
//               dragProps,
//             }) => (
//               <div className="upload__image-wrapper text-center">
//                 <button
//                   className={`btn btn-primary ${isDragging ? 'bg-danger' : ''}`}
//                   onClick={onImageUpload}
//                   {...dragProps}
//                 >
//                   add images 
//                 </button>
//                 &nbsp;
//                 <button className="btn btn-danger" onClick={onImageRemoveAll}>
//                   Remove all images
//                 </button>
//                 <div className="row mt-4 ">
//                   {imageList.map((image, index) => (
//                     <div key={index} className="col-md-3 mb-4 ">
//                       <div className="card">
//                         <img src={image['data_url']} alt="" className="card-img-top" style={imageStyle} />
//                         <div className="card-body ">
//                           <button
//                             className="  btn btn-warning btn-sm ms-0 mb-2"
//                             onClick={() => onImageUpdate(index)}
//                           >
//                             Update
//                           </button>
//                           <button
//                             className="btn btn-danger btn-sm  w-auth"
//                             onClick={() => onImageRemove(index)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//       </div>
//     </div>
//             <button type="submit" className="btn-save d-inline mt-2">Save modifications</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAddRoom;


import { useState } from 'react';
import axios from 'axios';
import avatar from '../../../../images/avatar.png';
import './AdminAddRoomm.css';
import { axiosClient } from '../../../../redux/axios';
import ImageUploading from 'react-images-uploading';
import { useNavigate } from 'react-router-dom';

const AdminAddRoom = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState(avatar);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [typech, settypech] = useState();
  const [price, setprice] = useState();
  const [sizech, setsizech] = useState();
  const [rating, setrating] = useState();
  const [hotelId, sethotelId] = useState('');
  const [numberChildren, setnumberChildren] = useState();
  const [numberAdult, setnumberAdult] = useState();
  const [numberR, setnumberR] = useState();
  const [TitleR, setTitleR] = useState();
  const [detailsR1, setdetailsR1] = useState();
  const [detailsR2, setdetailsR2] = useState();
  const [detailsR3, setdetailsR3] = useState();
  const [images, setImages] = useState([]);

  const maxNumber = 6;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const imageStyle = {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFiles(e.target.files[0]);
    }
  };

  const handleChange = (event) => {
    sethotelId(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('typech', typech);
      formData.append('price', price);
      formData.append('sizech', sizech);
      formData.append('dispo', 1);
      formData.append('rating', rating);
      formData.append('hotelId', hotelId);
      formData.append('numberChildren', numberChildren);
      formData.append('numberAdult', numberAdult);
      formData.append('numberR', numberR);
      formData.append('TitleR', TitleR);
      formData.append('detailsR1', detailsR1);
      formData.append('detailsR2', detailsR2);
      formData.append('detailsR3', detailsR3);
      formData.append('image', selectedFiles);

      // Append all selected images to the formData
      images.forEach((image, index) => {
        formData.append(`img${index + 1}`, image.file);
      });

      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post("http://localhost:8000/api/rooms", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
      navigate('/management_rooms');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <div className="row justify-content-start adminhaddRR">
        <div className="admin-content-text pb-4 mt-3"> Add a new Room </div>
        <div className="col-sm-9">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="text-form pb-2"> Picture of the Room </div>
            <div>
              <label htmlFor="upload-photo">
                <img
                  src={img}
                  alt="fzx"
                  height="100px"
                  width="120px"
                  style={{ cursor: 'pointer' }}
                />
                <input
                  type="file"
                  name="photo"
                  onChange={handleImageChange}
                  id="upload-photo"
                  className="d-none"
                  multiple
                />
              </label>
            </div>

            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              name="typech"
              placeholder="Type Room"
              value={typech}
              onChange={(e) => settypech(e.target.value)}
            />
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              name="price"
              placeholder="Price DH"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              name="TitleR"
              placeholder="Title Room"
              value={TitleR}
              onChange={(e) => setTitleR(e.target.value)}
            />
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              name="sizech"
              placeholder="Size Room"
              value={sizech}
              onChange={(e) => setsizech(e.target.value)}
            />
            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              name="detailsR1"
              placeholder="Description 1"
              value={detailsR1}
              onChange={(e) => setdetailsR1(e.target.value)}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              name="rating"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setrating(e.target.value)}
            />
            <select
              name="hotelId"
              className="select input-form-area d-block mt-3 px-5"
              value={hotelId}
              onChange={handleChange}
            >
              <option value="1">Fes</option>
              <option value="2">Casa</option>
              <option value="3">Marakech</option>
            </select>

            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              name="detailsR2"
              placeholder="Description 2"
              value={detailsR2}
              onChange={(e) => setdetailsR2(e.target.value)}
            />

            <div className="d-flex justify-content-between mt-2">
              <input
                type="number"
                className="input-form px-1 mx-1"
                name="numberAdult"
                placeholder="Number Adult"
                value={numberAdult}
                onChange={(e) => setnumberAdult(e.target.value)}
              />
              <input
                type="number"
                className="input-form px-1 mx-1"
                name="numberR"
                placeholder="Number Room"
                value={numberR}
                onChange={(e) => setnumberR(e.target.value)}
              />
              <input
                type="number"
                className="input-form px-1 mx-1"
                name="numberChildren"
                placeholder="Number Children"
                value={numberChildren}
                onChange={(e) => setnumberChildren(e.target.value)}
              />
            </div>

            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              name="detailsR3"
              placeholder="Description 3"
              value={detailsR3}
              onChange={(e) => setdetailsR3(e.target.value)}
            />

            {/* Image Upload Section */}
            <div className="container ms-0 mt-3">
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
                          onClick={(e) => {
                            e.preventDefault(); // Prevent form submission here
                            onImageUpload();
                          }}
                          {...dragProps}
                        >
                          Add Images
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent form submission here
                            onImageRemoveAll();
                          }}
                        >
                          Remove All Images
                        </button>
                        <div className="row mt-4">
                          {imageList.map((image, index) => (
                            <div key={index} className="col-md-3 mb-4">
                              <div className="card">
                                <img
                                  src={image['data_url']}
                                  alt=""
                                  className="card-img-top"
                                  style={imageStyle}
                                />
                                <div className="card-body">
                                  <button
                                    className="btn btn-warning btn-sm ms-0 mb-2"
                                    onClick={(e) => {
                                      e.preventDefault(); // Prevent form submission here
                                      onImageUpdate(index);
                                    }}
                                  >
                                    Update
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm w-auth"
                                    onClick={(e) => {
                                      e.preventDefault(); // Prevent form submission here
                                      onImageRemove(index);
                                    }}
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

            <button type="submit" className="btn-save d-inline mt-2">Save modifications</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddRoom;
