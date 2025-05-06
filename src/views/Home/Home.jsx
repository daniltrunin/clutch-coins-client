import Balance from "../../components/Balance/Balance";
import Tasks from "../../components/Tasks/Tasks";

import animation from "../../assets/coin-animation.gif";

const Home = () => {
  return (
    <>
      <div className="mb-4 flex flex-col items-center">
        <img className="max-w-[50%]" src={animation} alt="coin animation" />
        <h1 className="font-black text-4xl mb-1">Clutch Coins</h1>
        <p className="text-white/70 font-medium">
          Earn coins and exchange them for cases, stickers and skins for Counter
          Strike 2.
        </p>
      </div>
      <Balance />
      <Tasks />
    </>
  );
};

export default Home;
