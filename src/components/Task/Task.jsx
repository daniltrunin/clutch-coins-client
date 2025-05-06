const Task = ({ taskName, coinsForCompletion, buttonText }) => {
  return (
    <div className="bg-[#2c2c2d] rounded-xl p-3 flex gap-2 justify-between items-center">
      <div className="flex flex-col">
        <div className="font-bold text-left">{taskName}</div>
        <div className="font-bold text-white/60 text-left">
          {coinsForCompletion}
        </div>
      </div>
      <button className="btn-primary btn-task">{buttonText}</button>
    </div>
  );
};

export default Task;
