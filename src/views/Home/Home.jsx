import Balance from "../../components/Balance/Balance";
import Tasks from "../../components/Tasks/Tasks";

import animation from "../../assets/coin-animation.gif";
import example from "../../assets/coin-example.png";

const Home = () => {
  return (
    <>
      <div className="mb-12 flex flex-col items-center">
        <button className="mb-10 border-[1px] border-[#FFEAEA4D] py-3 px-6 rounded-4xl text-[#FF8B8D] font-semibold bg-[#00000070] hover:bg-[#0c0c0c70] transition drop-shadow-xs cursor-pointer">
          Нажми на меня
        </button>
        <img className="max-w-[60%]" src={example} alt="coin animation" />
      </div>
      <Balance />
      {/* <Tasks /> */}
    </>
  );
};

export default Home;
