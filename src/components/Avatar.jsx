import React from "react";
import userAvatar from "../assets/images/avatar.jpg";

export const Avatar = ({profile, watched}) => {
  return (
    <ul>
      <li>
        <i className="zmdi zmdi-arrow-left"></i>
      </li>
      <li></li>
      <li>
        <div className="profile-image">
          <div className="user-details">
            <p className="name">{`${profile.firstName} ${profile.lastName}`}</p>
            <p className="username">{`@${profile.username}`}</p>
            <p className="account-type">{`${profile.roles}`}</p>
            <p className="movies-watched">{watched} movies watched</p>
          </div>
          <img
            src={profile.avatar === null ? userAvatar : profile.avatar}
            alt=""
          />
        </div>
      </li>
    </ul>
  );
};
