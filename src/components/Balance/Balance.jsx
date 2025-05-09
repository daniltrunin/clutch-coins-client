import { useState } from "react";

import icon from "../../assets/coin-icon.png";

const Balance = () => {
  const [coinsAmount] = useState("400");

  return (
    <div className="bg-[#381011] border-[#983030d1] border-[1px] rounded-2xl p-4 flex flex-col gap-1">
      <div className="font-bold text-5xl flex justify-center items-center">
        <img className="w-12 h-12" src={icon} />
        {coinsAmount}
      </div>
      <div className="text-[#944042] font-semibold mb-4">Ваш баланс</div>
      <button className="btn-primary mb-6">Купить баллы</button>
    </div>
  );
};

export default Balance;
