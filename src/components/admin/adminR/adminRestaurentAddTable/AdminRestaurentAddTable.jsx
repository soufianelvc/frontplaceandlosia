

// export default AdminRestaurantAddTable;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import avatar from '../../../../images/avatar.png';
import './AdminRestaurentAddTable.css';
import { axiosClient } from '../../../../redux/axios';

const AdminRestaurantAddTable = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState(avatar);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [rating, setRating] = useState();
  const [hotelId, setHotelId] = useState('');
  const [dispo, setDispo] = useState(1);
  const [types, setTypes] = useState('');
  const [titleT, setTitleT] = useState('');
  const [detailsT1, setDetailsT1] = useState('');
  const [detailsT2, setDetailsT2] = useState('');
  const [detailsT3, setDetailsT3] = useState('');
  const [numberChildren, setNumberChildren] = useState();
  const [numberAdult, setNumberAdult] = useState();

  const [images, setImages] = useState([]);

  const maxNumber = 6;
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFiles(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('rating', rating);
      formData.append('hotelId', hotelId);
      formData.append('dispo', dispo);
      formData.append('types', types);
      formData.append('titleT', titleT);
      formData.append('detailsT1', detailsT1);
      formData.append('detailsT2', detailsT2);
      formData.append('detailsT3', detailsT3);
      formData.append('numberChildren', numberChildren);
      formData.append('numberAdult', numberAdult);
      formData.append('images', selectedFiles);

      // Append all selected images to the formData
      images.forEach((image, index) => {
        formData.append(`img${index + 1}`, image.file);
      });

      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post("http://placeandalosia.free.nf/api/tables", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
      navigate('/management_tables');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <div className="row justify-content-start adminAddTable">
        <div className="admin-content-text-table pb-4 mt-3">Add a new Table</div>
        <div className="col-sm-9">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="text-form-table pb-2">Picture of the Table</div>
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
              className="input-form-table d-block mt-3 px-3"
              name="types"
              placeholder="Type"
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            />
            <input
              type="text"
              className="input-form-table d-block mt-3 px-3"
              name="titleT"
              placeholder="Title"
              value={titleT}
              onChange={(e) => setTitleT(e.target.value)}
            />
            <textarea
              className="input-form-table-area p-2 mt-3"
              rows="4"
              cols="50"
              name="detailsT1"
              placeholder="Description 1"
              value={detailsT1}
              onChange={(e) => setDetailsT1(e.target.value)}
            />
            <input
              type="number"
              className="input-form-table d-block mt-3 px-3"
              name="rating"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <select
              name="hotelId"
              className="selectt input-form-table-area d-block mt-3 px-5"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
            >
              <option value="1">Fes</option>
              <option value="2">Casa</option>
              <option value="3">Marakech</option>
            </select>

            <textarea
              className="input-form-table-area p-2 mt-3"
              rows="4"
              cols="50"
              name="detailsT2"
              placeholder="Description 2"
              value={detailsT2}
              onChange={(e) => setDetailsT2(e.target.value)}
            />

            <div className="d-flex justify-content-between mt-2">
              <input
                type="number"
                className="input-form-table px-1 mx-1"
                name="numberAdult"
                placeholder="Number Adult"
                value={numberAdult}
                onChange={(e) => setNumberAdult(e.target.value)}
              />
              <input
                type="number"
                className="input-form-table px-1 mx-1"
                name="numberChildren"
                placeholder="Number Children"
                value={numberChildren}
                onChange={(e) => setNumberChildren(e.target.value)}
              />
            </div>

            <textarea
              className="input-form-table-area p-2 mt-3"
              rows="4"
              cols="50"
              name="detailsT3"
              placeholder="Description 3"
              value={detailsT3}
              onChange={(e) => setDetailsT3(e.target.value)}
            />

            <div className="container ms-0 mt-3">
              <div className="card">
                <div className="card-header">
                  <h4>Images</h4>
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
                          className={`btn btn-table ${isDragging ? 'bg-danger' : ''}`}
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
                                  style={{
                                    width: '100%',
                                    height: '100px',
                                    objectFit: 'cover',
                                  }}
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
            <button type="submit" className="btn-save-table d-inline mt-2">
              Save Modifications
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRestaurantAddTable;
