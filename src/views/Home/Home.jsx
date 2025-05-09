import Balance from "../../components/Balance/Balance";
import Tasks from "../../components/Tasks/Tasks";

import animation from "../../assets/coin-animation.gif";

const Home = () => {
  return (
    <>
      <div className="mb-4 flex flex-col items-center">
        <button className="border-[1px] border-[#FFEAEA4D] py-3 px-6 rounded-4xl text-[#FF8B8D] font-semibold bg-[#00000070] drop-shadow-xs cursor-pointer">
          Нажми на меня
        </button>
        <img className="max-w-[50%]" src={animation} alt="coin animation" />
      </div>
      <Balance />
      {/* <Tasks /> */}
    </>
  );
};

export default Home;
