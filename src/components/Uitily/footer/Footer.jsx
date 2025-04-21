import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem"><p>Countries</p></li>
            <li className="fListItem"><p>Regions</p></li>
            <li className="fListItem"><p >Cities</p></li>
            <li className="fListItem"><p >Districts</p></li>
            <li className="fListItem"><p >Airports</p></li>
            <li className="fListItem"><p href="#">Hotels</p></li>
          </ul>
          <ul className="fList">
            <li className="fListItem"><p>Homes</p></li>
            <li className="fListItem"><p>Apartments</p></li>
            <li className="fListItem"><p>Resorts</p></li>
            <li className="fListItem"><p>Villas</p></li>
            <li className="fListItem"><p>Hostels</p></li>
            <li className="fListItem"><p>Guest Houses</p></li>
          </ul>
          <ul className="fList">
            <li className="fListItem"><p>Unique Places to Stay</p></li>
            <li className="fListItem"><p>Reviews</p></li>
            <li className="fListItem"><p>Travel Articles</p></li>
            <li className="fListItem"><p>Travel Communities</p></li>
            <li className="fListItem"><p>Holiday Deals</p></li>
          </ul>
          <ul className="fList">
            <li className="fListItem"><p>Car Rental</p></li>
            <li className="fListItem"><p>Flight Finder</p></li>
            <li className="fListItem"><p>Restaurant Reservations</p></li>
            <li className="fListItem"><p>Travel Agents</p></li>
          </ul>
          <ul className="fList">
            <li className="fListItem"><p>Customer Service</p></li>
            <li className="fListItem"><p>Partner Help</p></li>
            <li className="fListItem"><p>Careers</p></li>
            <li className="fListItem"><p>Sustainapility</p></li>
            <li className="fListItem"><p>Press Center</p></li>
            <li className="fListItem"><p>Safety Resource Center</p></li>
            <li className="fListItem"><p>Investor Relations</p></li>
            <li className="fListItem"><p>Terms & Conditions</p></li>
          </ul>
        </div>
        <div className="footer-social">
          <div>
            <b className="social-link">Facebook</b>
            <b className="social-link">X</b>
            <b className="social-link">Instagram</b>
            <b className="social-link">LinkedIn</b>
          </div>
          <div className="fText">
            &copy; 2024 PlaceAndalusia. All rights reserved.
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;

