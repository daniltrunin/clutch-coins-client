import icon from "../../assets/coin-icon.png";

const Task = ({ taskName, coinsForCompletion, buttonText }) => {
  return (
    <div className="bg-[#2c2c2d] rounded-xl p-3 flex gap-2 justify-between items-center">
      <div className="flex flex-col">
        <div className="font-bold text-left">{taskName}</div>
        <div className="font-bold text-white/60 text-left flex items-center gap-1">
          {coinsForCompletion}
          <img className="w-4 h-4" src={icon}></img>
        </div>
      </div>
      <button className="btn-primary btn-task">{buttonText}</button>
    </div>
  );
};

export default Task;
