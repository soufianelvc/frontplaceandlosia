/*
 purple 


rgb(164, 0, 214)

green : 


*/


import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home/HomePage";
import MenuPage from "../page/menu/MenuPage";
import RepasDetalaisPage from "../page/menu/RepasDetailsPage";
import TableMenuListe from "../page/tableMenu/TableMenuListe";
import TableRestaunent from "../page/tableMenu/Table";
import LoginPage from "../page/authentication/LoginPage";
import Register from "../page/authentication/RegisterPage";
import HotelList from "../page/hotel/HotelList";
import HotelRoom from "../page/hotel/Hotel";
import Layout from "../layouts/layout";
import GuestLayout from "../layouts/GuestLayout";
import ClientDashboard from "../page/client/ClientDashboard";
import AdminHotelProfilePage from "../page/admin/adminH/AdminHotelProfilePage";
import AdminRoomLayout from "../layouts/AdminRoomLaout";
import ClientLayout from "../layouts/ClientLayout";

import AdminHotelAddRoomsPage from "../page/admin/adminH/AdminHotelAddRoomsPage";
import ClientResrvations from "../page/client/ClientResrvations";
import ClientReservationsTable from "../page/client/ClientResrvationsTable";
import ClientRepas from "../page/client/ClientRepas";
import AboutPage from "../page/about/AboutPage";
import ManagementInfoIlients from "../page/admin/adminH/ManagementInfoIlients";
import AdminHotelAddCientPage from "../page/admin/adminH/AdminHotelAddCientPage";
import ManagementRooms from "../page/admin/adminH/ManagementRooms";
import ManagementReservations from "../page/admin/adminH/ManagementReservations";
import AdminRestLaout from "../layouts/AdminRestLaout";
import AdminRestaurantProfilePage from "../page/admin/adminR/AdminRestaurantProfilePage";
import AdminHotelUpdateClientPage from "../page/admin/adminH/AdminHotelUpdateClientPage ";
import AdminHotelUpdateRoomsPage from "../page/admin/adminH/AdminHotelUpdateRoomsPage";
import ContactForm from "../page/contactForm/ContactForm";
import AdminDetailsRoomsPage from "../page/admin/adminH/AdminDetailsRoomsPage";
import AdminHotelEmails from "../page/admin/adminH/AdminHotelEmails";
import AdminRestaurantAddRepaPage from "../page/admin/adminR/AdminRestaurantAddRepaPage";
import AdminRestaurentMangagemetnRepasPage from "../page/admin/adminR/AdminRestaurentMangagemetnRepasPage";
import AdminRestaurentAddTablePage from "../page/admin/adminR/AdminRestaurentAddTablePage";
import AdminRestaurentMangagemetTablesPage from "../page/admin/adminR/AdminRestaurentMangagemetTablesPage";
import ManagementReservationsTablesPage from "../page/admin/adminR/ManagementReservationsTablesPage";
import AdminResUpdateRepaPage from "../page/admin/adminR/AdminResUpdateRepaPage";
import AdminDetailsRepasPage from "../page/admin/adminR/AdminDetailsRepasPage";
import AdminResUpdateTablePage from "../page/admin/adminR/AdminResUpdateTablePage";
import AdminDetailsTablePage from "../page/admin/adminR/AdminDetailsTablePage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/support",
        element: <ContactForm />,
      },
      {
        path: "/menu",
        children: [
          { index: true, element: <MenuPage /> },
          { path: "Repas", element: <RepasDetalaisPage /> },
          { path: "tables", element: <TableMenuListe /> },
          { path: "table", element: <TableRestaunent /> },
        ],
      },
      {
        path: "/hotels",
        children: [
          { index: true, element: <HotelList  /> },
          { path: "hotelsRom", element: <HotelRoom /> },
        ],
      },
      {
        path: "/about",
        children: [
          { index: true, element: <AboutPage  /> },
        ],
      },


    ]
  },
  {
    element : <GuestLayout/>,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <Register /> },
    ]
  }
  ,
  {
    element : <ClientLayout/>,
    children: [
      { path: "/client_dashbord", element: <ClientDashboard /> },
      { path: "/reservationsClient", element: <ClientResrvations /> },
      { path: "/reservationsTableClient", element: <ClientReservationsTable /> },
      { path: "/repasClient", element: <ClientRepas /> },
    ]
  }
  ,
  {
    element : <AdminRoomLayout/>,
    children: [
      { path: "/management_info_clients", element: <ManagementInfoIlients /> },
      { path: "/management_rooms", element: <ManagementRooms /> },
      { path: "/admin_room_dashbord", element: <AdminHotelProfilePage /> },
      { path: "/admin_add_room", element: <AdminHotelAddRoomsPage /> },
      { path: "/admin_update_room", element: <AdminHotelUpdateRoomsPage /> },
      { path: "/admin_details_room", element: <AdminDetailsRoomsPage /> },
      { path: "/add_new_client", element: <AdminHotelAddCientPage /> },
      { path: "/resrvations", element: <ManagementReservations /> },
      { path: "/list_emails", element: <AdminHotelEmails /> },
      { path: "/edite_info_clients", element: <AdminHotelUpdateClientPage  /> },
    ]
  }
  ,
  {
    element : <AdminRestLaout/>,
    children: [
      { path: "/admin_Restaurant", element: <AdminRestaurantProfilePage /> },
      { path: "/add_repa", element: <AdminRestaurantAddRepaPage /> },
      { path: "/management_repas", element: <AdminRestaurentMangagemetnRepasPage /> },
      { path: "/admin_update_repa", element: <AdminResUpdateRepaPage /> },
      { path: "/adminR_addTable", element: <AdminRestaurentAddTablePage /> },
      { path: "/management_tables", element: <AdminRestaurentMangagemetTablesPage /> },
      { path: "/resrvations_tables", element: <ManagementReservationsTablesPage /> },
      { path: "/admin_details_repa", element: <AdminDetailsRepasPage /> },
      { path: "/admin_update_table", element: <AdminResUpdateTablePage /> },
      { path: "/admin_details_table", element: <AdminDetailsTablePage /> },

    ]
  }
  
]);
