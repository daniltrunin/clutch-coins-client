import { useState } from "react";

import icon from "../../assets/coin-icon.png";

const Balance = () => {
  const [coinsAmount] = useState("400");

  return (
    <div className="bg-[#2c2c2d] rounded-xl p-4 flex flex-col gap-2">
      <div className="font-bold text-4xl flex justify-center gap-2">
        <img className="w-10 h-10" src={icon} />
        {coinsAmount}
      </div>
      <div className="text-white/50">your balance</div>
      <button className="btn-primary">Buy more coins</button>
    </div>
  );
};

export default Balance;
