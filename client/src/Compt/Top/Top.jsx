import { BiSearchAlt } from "react-icons/bi";
import "./top.css";
import "../../App.css";
import i from "../../Assets/pro.png";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcom to WEnergy.</h1>
          <p>Hello Synick, Welcome back!</p>
        </div>

        {/* <div className="searchBar flex">
          <input type="text" placeholder="search Dashboard" />
          <BiSearchAlt className="icon" />
        </div> */}

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={i} alt="Admin image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
