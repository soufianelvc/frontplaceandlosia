import { configureStore } from "@reduxjs/toolkit";
import RoomsSlice from "./reducers/RoomsSlice";
import TablesSlice from "./reducers/TablesSlice";
import ProductsSlice from "./reducers/ProductsSlice";
import ReservationRClientSlice from "./reducers/RoomsClientSlice";
import CmdRClientSlice from "./reducers/CmdRClientSlice";
import CmtRSlice from "./reducers/CmtRSlice";
import UsersSlice from "./reducers/UsersSlice";
import ReservationsRoomsSlice from "./reducers/ReservationsRoomsSlice";
import ClientSlice from "./reducers/ClientSlice";
import CmtTableSlice from "./reducers/CmtTableSlice";
import ReservationsTableSlice from "./reducers/ReservationsTableSlice";
import MessagesSlice from "./reducers/MessagesSlice";
import RepasSlice from "./reducers/RepasSlice";
import ThemeSlice from "./reducers/ThemeSlice";
const store = configureStore({
  reducer : {
    allPrducts : ProductsSlice,
    allRooms : RoomsSlice,
    allRepas:RepasSlice,
    allTabls : TablesSlice,
    allReservationsRoomClient : ReservationRClientSlice,
    allCmdRClient: CmdRClientSlice,
    allCommentairesRoom: CmtRSlice,
    allCommentairesTable : CmtTableSlice,
    allUsers : UsersSlice ,
    allReservationsRooms : ReservationsRoomsSlice,
    allReservationsTables : ReservationsTableSlice,
    infoClient : ClientSlice,
    messages: MessagesSlice,
    theme : ThemeSlice,
    
  }
});

export default store ; 