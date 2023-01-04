import React, { lazy } from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      src="https://media.licdn.com/dms/image/C4E03AQGC-emMf82Vqw/profile-displayphoto-shrink_200_200/0/1619178667306?e=1678320000&v=beta&t=ZwUN_TcDdOdvyr8gzVB4_wPFkxP5wvQVbaSu8XJsX_c"
      alt="profile picture"
      className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className} `}
    />
  );
};

export default Avatar;