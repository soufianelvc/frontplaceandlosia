import  { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const handleUpload = async () => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post("http://placeandalosia.free.nf/api/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRF-TOKEN': csrfToken // Include CSRF token in the request headers
      }
    });
    console.log('File uploaded:', response.data);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
