import trade from "../../assets/trade-icon.svg";
import community from "../../assets/community-icon.svg";

const ProfileMenu = () => {
  return (
    <div className="flex flex-col bg-[#2c2c2d] rounded-xl p-4 text-left font-bold gap-4">
      <div className="flex align-center gap-2 cursor-pointer">
        <img className="w-6" src={trade} /> Trade Link
      </div>
      <a
        href="https://t.me/+APBnbq322Hg5YjIy"
        className="flex align-center gap-2 cursor-pointer !text-white/100"
      >
        <img className="w-6" src={community} /> Join community
      </a>
    </div>
  );
};

export default ProfileMenu;
