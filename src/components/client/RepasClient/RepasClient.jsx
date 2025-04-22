

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCmd } from "../../../redux/reducers/CmdRClientSlice";
import { MdDelete } from "react-icons/md";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import "./RepasClient.css";

const RepasClient = ({ cmmds, i }) => {
  const { id, Qte, repas } = cmmds;

  if (!repas) {
    return <div>Repas data is missing for Commande {id}</div>;
  }
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);

  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);

  const handleDelete = () => {
    dispatch(deleteCmd(id));
    setOpenAlert(false);
  };

  return (
    <div className="reservation-success">
      <Dialog open={openAlert} onClose={handleCloseAlert} className="">
        <DialogContent className="bg-primary">
          <span className="text-light">Are you sure you want to delete this repas?</span>
        </DialogContent>
        <DialogActions className="bg-primary">
          <Button className="text-light" onClick={handleDelete}><b>Yes</b></Button>
          <Button className="text-light" onClick={handleCloseAlert}><b>No</b></Button>
        </DialogActions>
      </Dialog>

      <div className="reservation-details">
        <h5 className="d-flex align-items-center">
          <span>Commande {id}</span>
          <MdDelete className="delete-icon" onClick={handleOpenAlert} />
        </h5>
        <p className="detail">Number: {i + 1}</p>
        <p className="detail">Repas name: {repas.title ? repas.title : "N/A"}</p>
        <p className="detail">
          Repas price: <b className="price">{repas.price ? `${repas.price} dh` : "N/A"}</b>
        </p>
      </div>

      <div className="image-container">
        <img
          src={`http://placeandalosia.free.nf/images/${repas.image}`}
          alt={repas.title || "Repas Image"}
          className="image"
        />
      </div>
    </div>
  );
};

export default RepasClient;
