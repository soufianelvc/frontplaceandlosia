import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';
import { deleteUser, getAllUsers } from '../../../redux/reducers/UsersSlice';
import ReactPaginate from 'react-paginate';
import './pagination.css';
import file from "../../../images/file.png"
console.log(file)
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import './formedit.css'
import './ManagementInfoIlients.css'
import { useNavigate } from 'react-router-dom';

const ManagementInfoIlients = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 5;
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);
  const [idC, setIdc] = useState(1);
  const [client, setClient] = useState([]);

  const [name, setName] = useState();

 
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);


  const allUsers = useSelector(state => state.allUsers.Users) || [];
  const offset = currentPage * usersPerPage;
  const currentPageUsers = allUsers.slice(offset, offset + usersPerPage);
  const pageCount = Math.ceil(allUsers.length / usersPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const headerStyles = {
    backgroundColor: 'rgb(195, 0, 255)',
    color: '#FFFFFF',
    padding: '10px',
    textAlign: 'center',
  };

  const cellStyles = {
    border: '1px solid #dddddd',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'rgb(240, 240, 240)',
  };
  const cellStyles2 = {
    border: '1px solid #dddddd',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'rgb(232, 232, 232)',
  
  };


  const onDelete = async (id) => {
    try {

      console.log('Deleting user with id:', id);
      await dispatch(deleteUser(id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };


  const handleDelete = (item) => {
    setOpenAlert(true);
    setIdc(item.id)
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  function formatDateTime(timestamp) {
    const date = new Date(timestamp);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so adding 1 gives the correct month
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  
    return formattedDateTime;
  }
  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}}>
        <span className="text-light">Are you sure you want to delete this user  ?     </span>
      </DialogContent>
      <DialogActions style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}}>
        <Button className="text-light" onClick={() => { onDelete(idC); handleClose(); }}><b>Yes</b></Button>
        <Button className="text-light" onClick={handleClose}><b>No</b></Button>
      </DialogActions>
    </Dialog>
  );
//--------------------------------
  const handleDetails = (item) => {
    setOpenAlert2(true);
    setClient(item)
  };
  const handleCloseAlert2 = () => {
    setOpenAlert2(false);
  };

  const CustomAlert2 = ({ open, handleClose2 }) => (
    <Dialog open={open} onClose={handleClose2} >
      <DialogContent style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}}>
        <table className=''>
          <tr >
          <th className=''><img src={`http://localhost:8000/images/${client.image}`} onError={(e) => e.target.src = file}style={{width: "100px", height: "100px", borderRadius: "50%"}} /></th>
          <th className="text-light ps-3 mt-3"> <p className=''>ClientId : {client.id}</p></th>
          </tr>

          <tr className="text-light">
            <th></th>
           <th  > <b className='px-2'>name <b className='ms-3 '>:</b> </b>   {client.name}</th>
          </tr>
          <tr className="text-light ">
            <th></th>
           <th  > <b className='px-2'>email <b className='ms-3'>:</b> </b>   {client.email}</th>
          </tr>
          <tr className="text-light ">
            <th></th>
           <th  > <b className='px-2'>+2 12 <b className='ms-3'>:</b> </b>   {client.phoneNumber}</th>
          </tr>
          <tr className="text-light ">
            <th></th>
           <th  > <b className='px-2'>DATE <b className='ms-3'>:</b> </b>   { formatDateTime(client.created_at)}</th>
          </tr>
        </table>
      </DialogContent>
      <DialogActions style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}}>
        <Button className="text-light" onClick={handleClose2}><b>Close</b></Button>
      </DialogActions>
    </Dialog>
  );
  const handleEdite = (item) => {
    navigate('/edite_info_clients', { state: { client: item} });
  };


  const containerStyles = {
    width: '90%'
  };

  return (
    <div className="containerr_infoC">
          <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
          <CustomAlert2 open={openAlert2} handleClose2={handleCloseAlert2}/>
      <div className="dashboard_content_mic">
        <div className="sidebarAH">
          <AdminHotelSideBar />
        </div>
        <div className="main-content mt-5 ">
          <div className='mt-5 '></div>
          <div className='mt-5'></div>
          <div style={containerStyles}>
            <h2 style={{ color: 'rgb(195, 0, 255)' }}>List des clients</h2>
           <table className="table-container ">
  <thead>
    <tr>
      <th>CID</th>
      <th>Image</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {allUsers.length > 0 ? (
      currentPageUsers.map((item, index) => (
        <tr key={index}>
          <td data-label="CID">{item.id}</td>
          <td data-label="Image">
            <img 
              src={`http://localhost:8000/images/${item.image}`} 
              onError={(e) => e.target.src = file}
              alt="User"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
          </td>
          <td data-label="Name">{item.name}</td>
          <td data-label="Email">{item.email}</td>
          <td data-label="Address">{item.address1 ? item.address1 : <b>____</b>}</td>
          <td data-label="Action">
            <RiDeleteBin2Fill className="icon-delete" onClick={() => handleDelete(item)} />
            <FaEdit className="icon-edit" onClick={() => handleEdite(item)} />
            <TbListDetails className="icon-details" onClick={() => handleDetails(item)} />
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="text-center">Data is empty!</td>
      </tr>
    )}
  </tbody>
            </table>

            <ReactPaginate
              previousLabel={'< previous'}
              nextLabel={'next >'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
              previousClassName={'page-item'}
              nextClassName={'page-item'}
              breakClassName={'page-item'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousLinkClassName={'page-link'}
              nextLinkClassName={'page-link'}
              breakLinkClassName={'page-link'}
              activeLinkClassName={'active'}
              renderOnZeroPageCount={null}
            /> 
          </div>

        </div>
      </div>
      <hr className='pt-1' style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}} />

    </div>
  );
};

export default ManagementInfoIlients;
