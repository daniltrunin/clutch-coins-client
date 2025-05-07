import { useState } from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

import pfp from "../../assets/pfp.jpg";

const Profile = () => {
  const [userName] = useState("Мария");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 mb-10 items-center">
        <img className="rounded-full w-24" src={pfp} />
        <div className="font-bold text-2xl">{userName}</div>
      </div>
      <ProfileMenu />
    </div>
  );
};

export default Profile;
