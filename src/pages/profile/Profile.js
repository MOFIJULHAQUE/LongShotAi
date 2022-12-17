import React from "react";
import "./profile.css";
import { RiDashboardFill } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { ImBlogger2 } from "react-icons/im";

const Profile = () => {
  return (
    <div className="px-3 py-5 pmain">
      <div className="d-flex align-items-center mb-2 gap-2  image">
        <img
          src="https://i.stack.imgur.com/lAwxR.png"
          class="rounded-circle"
          style={{ width: "50px", height: "50px" }}
          alt="Avatar"
        />{" "}
      </div>
      <p>user@gmail.com</p>{" "}
      <div className="d-flex mb-2">
        <button className="btn btn-success w-100 text-start d-flex align-items-center gap-3">
          <BiFoodMenu />
          Change Plan
        </button>{" "}
      </div>
      <div className="m-2">
        <p className="m-0 w-100 d-flex align-items-center gap-3 ">
          <RiDashboardFill />
          Product roadmap
        </p>{" "}
      </div>
    </div>
  );
};

export default Profile;
