import trade from "../../assets/trade-icon.svg";
import community from "../../assets/community-icon.svg";
import arrow from "../../assets/arrow.png";

const ProfileMenu = () => {
  return (
    <div className="bg-[#381011] rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex align-center gap-2 cursor-pointer font-bold text-md hover:!text-white/85 transition">
        <img className="w-5" src={trade} /> Ссылка на трейд
        <img className="w-6 h-6 ml-auto" src={arrow} />
      </div>
      <a
        href="https://t.me/+APBnbq322Hg5YjIy"
        className="flex align-center gap-2 cursor-pointer !text-white/100 hover:!text-white/85 !font-bold text-md"
      >
        <img className="w-5" src={community} /> Подписаться на канал
        <img className="w-6 h-6 ml-auto" src={arrow} />
      </a>
    </div>
  );
};

export default ProfileMenu;
